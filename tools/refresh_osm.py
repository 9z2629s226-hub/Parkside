#!/usr/bin/env python3
"""Refresh a best-effort, attributed OSM snapshot of mapped park interiors.

Run from the project root: python3 tools/refresh_osm.py
The official OSM API has size limits; failures are recorded per park and do not
silently replace the last successful snapshot. These boundaries do not cover all
resort hotels/shopping districts. OSM may have omissions or stale tags.
"""
import concurrent.futures, datetime, json, math, os, time, urllib.parse, urllib.request, xml.etree.ElementTree as ET
from pathlib import Path

PARKS = [
('Disneyland Park','Anaheim','relation',5586855),('Disney California Adventure','Anaheim','relation',15626312),
("Knott's Berry Farm",'Buena Park','way',882176907),('Six Flags Magic Mountain','Valencia','way',70260375),
('Universal Studios Hollywood','Universal City','way',1304528747),('LEGOLAND California','Carlsbad','way',218774467),
('LEGOLAND California Water Park','Carlsbad','way',384523143),('SeaWorld San Diego','San Diego','way',1293809671),
('Sesame Place San Diego','Chula Vista','way',101600600),("California’s Great America",'Santa Clara','way',300606963),
('Six Flags Discovery Kingdom','Vallejo','way',47005606),('Santa Cruz Beach Boardwalk','Santa Cruz','relation',7063039),
('Gilroy Gardens','Gilroy','way',299951753),('Pacific Park','Santa Monica','way',173532595),('Belmont Park','San Diego','way',31284612),
('Castle Park','Riverside','way',44486515),('Adventure City','Anaheim','way',113104212),('Funderland Amusement Park','Sacramento','way',230157306),
('Children’s Fairyland','Oakland','way',25169933),('Sonoma TrainTown Railroad','Sonoma','way',279302286),
('SkyPark at Santa’s Village','Skyforest','way',958703778),('Knott’s Soak City','Buena Park','way',543061487),
('Raging Waters Los Angeles','San Dimas','way',236520101),('Hurricane Harbor Los Angeles','Valencia','way',105153130),
('Hurricane Harbor Concord','Concord','way',31198945),('Wild Rivers','Irvine','way',1067059654),
('Great Wolf Lodge Southern California','Garden Grove','way',535074171),('The Wave Waterpark','Vista','way',70954827),
('The Cove Waterpark','Riverside','way',546885620),('Island Waterpark','Fresno','way',61405718),
('Wild Water Adventure Park','Clovis','way',61038051),('The Ravine Waterpark','Paso Robles','way',283810457),
('WaterWorks Park','Redding','way',510038092),('DryTown Water Park','Palmdale','way',216251595),
('Splash! La Mirada Regional Aquatics Center','La Mirada','way',158815356),('Roseville Golfland Sunsplash','Roseville','relation',13295274),
('Aqua Adventure Waterpark','Fremont','way',37784277),('Pixieland Amusement Park','Concord','way',114625592),
('Fiesta Village Family Fun Park','Colton','way',119429907),('Balboa Fun Zone','Newport Beach','way',188709100),
('Fun Town at Micke Grove','Lodi','way',582501513),('Mustang Waterpark','Arroyo Grande','way',396955335),
('Casitas Water Adventure','Ventura','way',1069788685),('Camelot Golfland Family Fun Center','Anaheim','way',177934932),
('Boomers Irvine','Irvine','way',177929805),('Boomers Livermore','Livermore','way',1118510636),
]
BASE='https://www.openstreetmap.org/api/0.6'
HEAD={'User-Agent':'Parkside-California-directory/1.0 (educational noncommercial data refresh; park directory)'}
def get(url):
    for attempt in range(3):
        try:
            with urllib.request.urlopen(urllib.request.Request(url,headers=HEAD),timeout=45) as r: return ET.fromstring(r.read())
        except Exception:
            if attempt == 2: raise
            time.sleep(2*(attempt+1))
def ring_join(segments):
    rings=[]
    while segments:
        cur=segments.pop(0)
        while cur and cur[0]!=cur[-1]:
            for i,seg in enumerate(segments):
                if cur[-1]==seg[0]: cur+=seg[1:]; segments.pop(i); break
                if cur[-1]==seg[-1]: cur+=list(reversed(seg[:-1])); segments.pop(i); break
                if cur[0]==seg[-1]: cur=seg[:-1]+cur; segments.pop(i); break
                if cur[0]==seg[0]: cur=list(reversed(seg[1:]))+cur; segments.pop(i); break
            else: break
        if len(cur)>3 and cur[0]==cur[-1]: rings.append(cur)
    return rings
def inside(p, poly):
    x,y=p; hit=False
    for i in range(len(poly)-1):
        x1,y1=poly[i];x2,y2=poly[i+1]
        if (y1>y)!=(y2>y) and x < (x2-x1)*(y-y1)/(y2-y1)+x1: hit=not hit
    return hit
def tags(el): return {t.get('k'):t.get('v') for t in el.findall('tag')}
def fetch_park(p):
    park, city, typ, oid=p
    boundary=get(f'{BASE}/{typ}/{oid}/full')
    nodes={n.get('id'):(float(n.get('lon')),float(n.get('lat'))) for n in boundary.findall('node')}
    ways={w.get('id'):[nd.get('ref') for nd in w.findall('nd')] for w in boundary.findall('way')}
    if typ=='way': segs=[ways[str(oid)]]
    else:
        rel=next(x for x in boundary.findall('relation') if x.get('id')==str(oid))
        segs=[ways[m.get('ref')] for m in rel.findall('member') if m.get('type')=='way' and m.get('role') in ('outer','') and m.get('ref') in ways]
    rings=[[nodes[n] for n in ring if n in nodes] for ring in ring_join(segs)]
    if not rings: raise ValueError('No closed outer boundary')
    points=[pt for ring in rings for pt in ring]; west=min(x for x,y in points);east=max(x for x,y in points);south=min(y for x,y in points);north=max(y for x,y in points)
    if (east-west)*(north-south)>.25: raise ValueError('Boundary too large for OSM map API')
    try:
        root=get(f'{BASE}/map?bbox={west:.7f},{south:.7f},{east:.7f},{north:.7f}')
    except Exception:
        # Dense parks can exceed the API's node limit; merge four smaller tiles.
        root=ET.Element('osm'); seen=set(); midx=(west+east)/2; midy=(south+north)/2
        for w,s,e,n in ((west,south,midx,midy),(midx,south,east,midy),(west,midy,midx,north),(midx,midy,east,north)):
            tile=get(f'{BASE}/map?bbox={w:.7f},{s:.7f},{e:.7f},{n:.7f}')
            for obj in tile:
                key=(obj.tag,obj.get('id'))
                if key not in seen: seen.add(key);root.append(obj)
    mapnodes={n.get('id'):(float(n.get('lon')),float(n.get('lat'))) for n in root.findall('node')}
    result=[]
    for el in list(root.findall('node'))+list(root.findall('way')):
        t=tags(el); name=t.get('name','').strip()
        if not name or any(t.get(x) for x in ('disused','abandoned','demolished','closed')) or t.get('operational_status') in ('closed','abandoned'): continue
        amenity=t.get('amenity',''); attr=t.get('attraction',''); tourism=t.get('tourism',''); leisure=t.get('leisure','')
        if amenity in ('restaurant','fast_food','cafe','ice_cream','bar','pub','food_court') or t.get('shop') in ('ice_cream','confectionery'):
            category='restaurants'
        elif attr in ('roller_coaster','ride','carousel','water_slide','ferris_wheel','train','dark_ride','drop_tower','boat_ride','log_flume','bumper_cars','haunted_house','swing_ride','slide','miniature_railway') or tourism=='attraction' or leisure=='water_slide':
            category='rides'
        else: continue
        if el.tag=='node': point=mapnodes.get(el.get('id'))
        else:
            coords=[mapnodes[nd.get('ref')] for nd in el.findall('nd') if nd.get('ref') in mapnodes]
            point=(sum(x for x,y in coords)/len(coords),sum(y for x,y in coords)/len(coords)) if coords else None
        if not point or not any(inside(point,r) for r in rings):continue
        result.append({'id':f'osm-{el.tag}-{el.get("id")}','category':category,'name':name,'park':park,'location':city+', CA','score':None,'tag':'OSM • VERIFY','source':f'https://www.openstreetmap.org/{el.tag}/{el.get("id")}','description':f'{name} is mapped within {park} in OpenStreetMap. Classification and current operating status have not been independently verified; check with the park before visiting.'})
    return p,result

def discover_statewide():
    # This finds candidates, not certified operating parks. OSM tags can be stale.
    query='[out:json][timeout:120];area(3600165475)->.ca;(nwr["tourism"="theme_park"]["name"](area.ca);nwr["leisure"="water_park"]["name"](area.ca););out center;'
    url='https://overpass-api.de/api/interpreter?'+urllib.parse.urlencode({'data':query})
    cache=Path('osm-parks.json')
    try:
        req=urllib.request.Request(url,headers=HEAD)
        with urllib.request.urlopen(req,timeout=160) as r: raw=r.read().decode('utf-8')
        obj=json.loads(raw); cache.write_text(raw)
        print(f"Statewide discovery: {len(obj.get('elements',[]))} mapped candidates",flush=True)
    except Exception as e:
        if not cache.exists(): print(f'Statewide discovery failed: {e}',flush=True);return []
        print(f'Statewide discovery failed; using cached candidates: {e}',flush=True)
        obj=json.loads(cache.read_text())
    return obj.get('elements',[])

def main():
    discovered=discover_statewide()
    target=Path('osm-directory.js'); previous={}
    if target.exists():
        try:
            old=json.loads(target.read_text().split('=',1)[1].strip().rstrip(';')); previous=old.get('byPark',{})
        except Exception: pass
    bypark=dict(previous); failures=[]
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
        futures={pool.submit(fetch_park,p):p for p in PARKS}
        for f in concurrent.futures.as_completed(futures):
            p=futures[f]
            try:
                _,results=f.result();bypark[p[0]]=results;print(f'{p[0]}: {len(results)} mapped entries',flush=True)
            except Exception as e: failures.append(p[0]);print(f'{p[0]}: FAILED: {e}',flush=True)
    payload={'generatedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'byPark':bypark,'discovered':discovered,'failed':failures,'method':'Named OpenStreetMap objects within mapped park boundaries; not a complete inventory.'}
    target.write_text('// Generated by tools/refresh_osm.py. © OpenStreetMap contributors.\nconst osmDirectory = '+json.dumps(payload,ensure_ascii=False,separators=(',',':'))+';\n')
    print(f'Done: {sum(map(len,bypark.values()))} records across {len(bypark)} parks. Failed: {len(failures)}',flush=True)
if __name__=='__main__':main()
