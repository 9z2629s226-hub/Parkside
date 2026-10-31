const img = {
 castle:'image-search/disneyland-castle-california-sunny-park-1.jpg',
 racers:'image-search/disney-california-adventure-radiator-spr-1.jpg',
 indy:'image-search/disneyland-indiana-jones-adventure-ride--1.jpg',
 colossus:'image-search/six-flags-magic-mountain-twisted-colossu-1.jpg',
 ghost:'image-search/knott-s-berry-farm-ghostrider-roller-coa-1.jpg',
 jurassic:'image-search/universal-studios-hollywood-theme-park-j-1.jpg',
 hogwarts:'image-search/universal-studios-hollywood-harry-potter-1.jpg',
 space:'image-search/disneyland-space-mountain-exterior-calif-1.jpg'
};
// Scores are Parkside's illustrative editorial picks, not aggregated user reviews.
const data = [
 {id:'racers',category:'rides',name:'Radiator Springs Racers',park:'Disney California Adventure',location:'Anaheim, CA',score:4.9,tag:'FAMILY FAVORITE',image:img.racers,description:'Cruise through the red-rock scenery of Cars Land before lining up for a friendly, high-speed race. A scenic dark ride and a thrilling finish make this a California classic.'},
 {id:'indy',category:'rides',name:'Indiana Jones Adventure',park:'Disneyland Park',location:'Anaheim, CA',score:4.8,tag:'DARK RIDE',image:img.indy,description:'Enter the Temple of the Forbidden Eye for a bumpy expedition full of booby traps, ancient mythology, and larger-than-life adventure.'},
 {id:'colossus',category:'rides',name:'Twisted Colossus',park:'Six Flags Magic Mountain',location:'Valencia, CA',score:4.8,tag:'THRILL RIDE',image:img.colossus,description:'A hybrid coaster that twists its way through inversions, airtime hills, and an ambitious dueling layout. One for the thrill seekers.'},
 {id:'ghost',category:'rides',name:'GhostRider',park:"Knott's Berry Farm",location:'Buena Park, CA',score:4.7,tag:'THRILL RIDE',image:img.ghost,description:'A legendary wooden coaster rumbling over Ghost Town with big drops, sharp turns, and plenty of old-school character.'},
 {id:'forbidden',category:'rides',name:'Harry Potter and the Forbidden Journey',park:'Universal Studios Hollywood',location:'Universal City, CA',score:4.7,tag:'DARK RIDE',image:img.hogwarts,description:'Journey through Hogwarts Castle before taking flight on a magical adventure through memorable moments from the wizarding world.'},
 {id:'space',category:'rides',name:'Space Mountain',park:'Disneyland Park',location:'Anaheim, CA',score:4.6,tag:'CLASSIC',image:img.space,description:'Blast off into the darkness on a beloved indoor coaster complete with a stellar soundtrack and intergalactic atmosphere.'},
 {id:'jurassic',category:'rides',name:'Jurassic World – The Ride',park:'Universal Studios Hollywood',location:'Universal City, CA',score:4.5,tag:'WATER RIDE',image:img.jurassic,description:'Meet dinosaurs on a boat journey through Jurassic World, ending in a splashy escape from a very large predator.'},
 {id:'disneyland',category:'parks',name:'Disneyland Park',park:'Disneyland Park',location:'Anaheim, CA',score:4.9,tag:'THE ORIGINAL',image:img.castle,description:'The original Disney park brings together timeless attractions, immersive lands, and a castle at the heart of the magic.'},
 {id:'dca',category:'parks',name:'Disney California Adventure',park:'Disney California Adventure',location:'Anaheim, CA',score:4.8,tag:'FAMILY FAVORITE',image:img.racers,description:'A celebration of California stories, from the neon glow of Cars Land to the thrills of Pixar Pier and Avengers Campus.'},
 {id:'universal',category:'parks',name:'Universal Studios Hollywood',park:'Universal Studios Hollywood',location:'Universal City, CA',score:4.7,tag:'MOVIE MAGIC',image:img.hogwarts,description:'A working movie studio and theme park in one, with screen-inspired adventures, the Studio Tour, and the Wizarding World.'},
 {id:'knotts',category:'parks',name:"Knott's Berry Farm",park:"Knott's Berry Farm",location:'Buena Park, CA',score:4.6,tag:'CALIFORNIA CLASSIC',image:img.ghost,description:'A California original with roots in a berry farm, a charming Ghost Town, and a line-up of memorable coasters.'},
 {id:'sixflags',category:'parks',name:'Six Flags Magic Mountain',park:'Six Flags Magic Mountain',location:'Valencia, CA',score:4.5,tag:'THRILL CENTRAL',image:img.colossus,description:'A coaster lover’s playground in the Santa Clarita Valley, packed with towering drops, inversions, and high-speed thrills.'},
 {id:'bluebayou',category:'restaurants',name:'Blue Bayou Restaurant',park:'Disneyland Park',location:'Anaheim, CA',score:4.8,tag:'TABLE SERVICE',image:img.castle,description:'Dine in the perpetual twilight of a Louisiana bayou alongside the boats of Pirates of the Caribbean. Reservations are recommended.'},
 {id:'lamplight',category:'restaurants',name:'Lamplight Lounge',park:'Disney California Adventure',location:'Anaheim, CA',score:4.7,tag:'WATERFRONT',image:img.racers,description:'A Pixar-inspired lounge overlooking the water, known for creative bites, cocktails, and playful animation details.'},
 {id:'thre broom',category:'restaurants',name:'Three Broomsticks',park:'Universal Studios Hollywood',location:'Universal City, CA',score:4.6,tag:'QUICK SERVICE',image:img.hogwarts,description:'Step into a rustic Hogsmeade tavern for British-inspired comfort food and a frosty Butterbeer.'},
 {id:'chicken',category:'restaurants',name:"Mrs. Knott's Chicken Dinner",park:"Knott's Berry Farm",location:'Buena Park, CA',score:4.6,tag:'CALIFORNIA CLASSIC',image:img.ghost,description:'A historic comfort-food institution famous for fried chicken and boysenberry treats, just outside the park gates.'},
 {id:'carsland',category:'theming',name:'Cars Land',park:'Disney California Adventure',location:'Anaheim, CA',score:4.9,tag:'IMMERSIVE LAND',image:img.racers,description:'Walk right into Radiator Springs, where dramatic rockwork, Route 66 details, and glowing neon bring the world of Cars to life.'},
 {id:'wizarding',category:'theming',name:'The Wizarding World of Harry Potter',park:'Universal Studios Hollywood',location:'Universal City, CA',score:4.8,tag:'IMMERSIVE LAND',image:img.hogwarts,description:'Wander the snow-capped rooftops of Hogsmeade, explore magical shops, and look up to Hogwarts Castle.'},
 {id:'fantasyland',category:'theming',name:'Fantasyland',park:'Disneyland Park',location:'Anaheim, CA',score:4.7,tag:'FAIRYTALE CLASSIC',image:img.castle,description:'A storybook village of castles, classic dark rides, and fairytale details in the heart of Disneyland.'},
 {id:'ghosttown',category:'theming',name:'Ghost Town',park:"Knott's Berry Farm",location:'Buena Park, CA',score:4.6,tag:'OLD WEST',image:img.ghost,description:'Discover an atmospheric Old West town filled with historic buildings, craftspeople, and the spirit of the park’s early days.'}
];
// Add the expanded park directory and named rides/dining locations without
// implying that new entries have an editorial or community score.
for (const [name, city, source] of directoryParks) {
  data.push({id:'park-'+name.toLowerCase().replace(/[^a-z0-9]+/g,'-'),category:'parks',name,park:name,location:city+', CA',score:null,tag:'PARK DIRECTORY',source,description:'Explore this California park. Check the operator website for current hours, seasonal dates, attractions, and dining.'});
}
for (const [category, park, city, source, names] of extraGroups) {
  for (const name of names.split('|')) {
    if (data.some(item=>item.category===category && item.park===park && item.name.toLowerCase()===name.toLowerCase())) continue;
    data.push({id:category+'-'+park.toLowerCase().replace(/[^a-z0-9]+/g,'-')+'-'+name.toLowerCase().replace(/[^a-z0-9]+/g,'-'),category,name,park,location:city+', CA',score:null,tag:category==='rides'?'ATTRACTION':'DINING',source,description:`${name} is listed at ${park}. Check the operator's directory for current details and availability.`});
  }
}
// Merge attributed OSM snapshot. This is discovery data, not a guarantee that
// a location is open, correctly classified, or comprehensively mapped.
const normName = x => x.toLowerCase().normalize('NFKD').replace(/[’‘]/g,"'").replace(/[^a-z0-9]/g,'');
for (const entries of Object.values(osmDirectory.byPark || {})) {
  for (const item of entries) {
    if (!data.some(existing=>existing.category===item.category && existing.park===item.park && normName(existing.name)===normName(item.name))) data.push(item);
  }
}
const knownOSM = new Set([
  'relation/5586855','relation/15626312','way/882176907','way/70260375','way/1304528747','way/218774467','way/384523143','way/1293809671','way/101600600','way/300606963','way/47005606','relation/7063039','way/299951753','way/173532595','way/31284612','way/44486515','way/113104212','way/230157306','way/25169933','way/279302286','way/958703778','way/543061487','way/236520101','way/105153130','way/31198945','way/1067059654','way/535074171','way/70954827','way/546885620','way/61405718','way/61038051','way/283810457','way/510038092','way/216251595','way/158815356','relation/13295274','node/1234469243','node/3139378640',
  // Known closed legacy points should not be shown as destinations.
  'node/358836203','node/358845750','way/38212517'
]);
for (const e of (osmDirectory.discovered || [])) {
  const t=e.tags||{}, name=t.name?.trim(), osmKey=e.type+'/'+e.id;
  if(!name || knownOSM.has(osmKey) || /\bclosed\b/i.test(name) || t.disused || t.abandoned || t.demolished || t.closed) continue;
  if(data.some(x=>x.category==='parks' && normName(x.name)===normName(name))) continue;
  // Name collisions at different coordinates remain distinguishable by city/id.
  const city=t['addr:city'] || ''; let display=name;
  if(data.some(x=>x.category==='parks' && normName(x.name)===normName(display))) display=`${name} (${city || 'OSM '+e.id})`;
  data.push({id:'osm-park-'+e.type+'-'+e.id,category:'parks',name:display,park:display,location:city?city+', CA':'California',score:null,tag:'OSM • VERIFY',source:'https://www.openstreetmap.org/'+osmKey,description:`${name} is mapped as a theme or water park in OpenStreetMap. Its classification, operating status, and accessibility have not been independently verified.`});
}
// Resort dining is a separate location so it is not misrepresented as inside a park.
const parkSelect=document.querySelector('#parkFilter');
parkSelect.innerHTML='<option value="all">All parks & resorts</option>'+[...new Set(data.map(item=>item.park))].sort((a,b)=>a.localeCompare(b)).map(name=>`<option>${name.replace(/&/g,'&amp;').replace(/</g,'&lt;')}</option>`).join('');
const copy={rides:['Top rides in California',"The thrills, chills, and can’t-miss classics worth the wait."],parks:['Top parks in California','The places where your favorite memories are waiting to happen.'],restaurants:['Top bites in California','From iconic treats to memorable meals, come hungry.'],theming:['Best theming in California','Step into another world, one incredible detail at a time.']};
let state={category:'rides',savedOnly:false,search:'',park:'all',sort:'rank',activeId:null,limit:16};
function load(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
let saved=load('parkside-saved',[]), ratings=load('parkside-ratings',{});
if(!Array.isArray(saved))saved=[]; if(!ratings || typeof ratings!=='object')ratings={};
function persist(){try{localStorage.setItem('parkside-saved',JSON.stringify(saved));localStorage.setItem('parkside-ratings',JSON.stringify(ratings))}catch{}}
const $=s=>document.querySelector(s);
function escapeHTML(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function setCategory(category){state.category=category;state.savedOnly=false;state.limit=16;updateNav();render()}
function updateNav(){document.querySelectorAll('.category-tab').forEach(b=>{const on=b.dataset.category===state.category;b.classList.toggle('active',on);b.setAttribute('aria-selected',String(on))});document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',state.savedOnly?b.dataset.nav==='saved':b.dataset.nav===(state.category==='rides'?'rankings':state.category)));$('.saved-count').textContent=saved.length}
function toggleSaved(id){saved=saved.includes(id)?saved.filter(x=>x!==id):[...saved,id];persist();updateNav();render();if(state.activeId===id)updateModal()}
function render(){
 updateNav(); const results=data.filter(item=>(state.savedOnly?saved.includes(item.id):item.category===state.category)&&(state.park==='all'||item.park===state.park)&&(`${item.name} ${item.park} ${item.location} ${item.tag}`.toLowerCase().includes(state.search.toLowerCase().trim())));
 results.sort((a,b)=>state.sort==='name'?a.name.localeCompare(b.name):state.sort==='personal'?((ratings[b.id]||0)-(ratings[a.id]||0)||(b.score??-1)-(a.score??-1)||a.name.localeCompare(b.name)):((b.score??-1)-(a.score??-1)||a.name.localeCompare(b.name)));
 $('#listTitle').textContent=state.savedOnly?'Your saved places':copy[state.category][0]; $('#listSubtitle').textContent=state.savedOnly?'Your favorite finds, all together in one happy place.':copy[state.category][1];
 $('#resultCount').textContent=`SHOWING ${results.length} ${results.length===1?'PICK':'PICKS'}`; $('#empty').hidden=results.length>0;
 $('#loadMore').hidden=results.length<=state.limit; $('#loadMore').textContent=`Show more places (${results.length-state.limit} remaining) ↓`; $('#cards').innerHTML=results.slice(0,state.limit).map(item=>{const rank=item.score===null?null:data.filter(x=>x.category===item.category && x.score!==null).sort((a,b)=>b.score-a.score).findIndex(x=>x.id===item.id)+1;const isSaved=saved.includes(item.id);return `<article class="card" tabindex="0" role="button" aria-label="View details for ${escapeHTML(item.name)}" data-id="${escapeHTML(item.id)}"><div class="card-image" style="${item.image?`background-image:url('${item.image}')`: ''}"><span class="rank-badge">${rank?'#'+String(rank).padStart(2,'0'):'✳'}</span>${item.image?'':`<span class="placeholder-art">${item.category==='parks'?'☼':item.category==='rides'?'♧':'♨'}</span>`}<button class="save-button ${isSaved?'saved':''}" data-save="${escapeHTML(item.id)}" aria-label="${isSaved?'Remove':'Save'} ${escapeHTML(item.name)}" aria-pressed="${isSaved}">${isSaved?'♥':'♡'}</button></div><div class="card-body"><div class="card-meta"><span>${escapeHTML(item.park.toUpperCase())}</span><span class="tag">${escapeHTML(item.tag)}</span></div><h4>${escapeHTML(item.name)}</h4><div class="location"><span>⌖</span> ${escapeHTML(item.location)}</div><div class="card-bottom"><div class="rating"><span class="star">★</span> ${item.score!==null?item.score.toFixed(1):'Not scored'} <small>${ratings[item.id]?`· You: ${ratings[item.id]}★`:(item.score!==null?'/ 5':'')}</small></div><span class="card-link">Details <span>↗</span></span></div></div></article>`}).join('');
}
function openModal(id){state.activeId=id;updateModal();$('#detailModal').showModal()}
function updateModal(){const item=data.find(x=>x.id===state.activeId);if(!item)return;$('#modalImage').style.backgroundImage=item.image?`url('${item.image}')`:'';$('#modalImage').classList.toggle('no-photo',!item.image);$('#modalEyebrow').textContent=`${item.category.toUpperCase()}  ✦  ${item.tag}`;$('#modalTitle').textContent=item.name;$('#modalLocation').textContent=`⌖  ${item.park} · ${item.location}`;$('#modalScore').textContent=item.score!==null?`${item.score.toFixed(1)} / 5`:'Not scored';$('.modal-score span:last-child').textContent=item.score!==null?'Illustrative editorial score':'No editorial score yet';$('#modalSource').href=item.source||sourceByPark[item.park]||'https://www.visitcalifornia.com/';$('#modalSource').textContent=item.source && item.source.startsWith('https://www.openstreetmap.org/')?'View OpenStreetMap source ↗':'Check the operator’s listing ↗';$('#modalDescription').textContent=item.description;$('#ratingStars').innerHTML=[1,2,3,4,5].map(n=>`<button class="${n<=(ratings[item.id]||0)?'selected':''}" data-rating="${n}" aria-label="Rate ${n} out of 5 stars" aria-pressed="${ratings[item.id]===n}">★</button>`).join('');$('#modalSave').textContent=saved.includes(item.id)?'♥  Saved to your places':'♡  Save to your places'}
document.querySelectorAll('.category-tab').forEach(b=>b.addEventListener('click',()=>setCategory(b.dataset.category)));
document.querySelectorAll('.nav-item').forEach(b=>b.addEventListener('click',()=>{const nav=b.dataset.nav;if(nav==='saved'){state.savedOnly=true;state.limit=16;updateNav();render()}else setCategory(nav==='rankings'?'rides':nav);$('#rankings').scrollIntoView({behavior:'smooth'})}));
$('#topSaved').addEventListener('click',()=>{state.savedOnly=true;state.limit=16;render();$('#rankings').scrollIntoView({behavior:'smooth'})});
$('#exploreButton').addEventListener('click',()=>$('#rankings').scrollIntoView({behavior:'smooth'}));
$('#search').addEventListener('input',e=>{state.search=e.target.value;state.limit=16;render()});$('#parkFilter').addEventListener('change',e=>{state.park=e.target.value;state.limit=16;render()});$('#sortFilter').addEventListener('change',e=>{state.sort=e.target.value;state.limit=16;render()});
$('#cards').addEventListener('click',e=>{const save=e.target.closest('[data-save]');if(save){e.stopPropagation();toggleSaved(save.dataset.save);return}const card=e.target.closest('.card');if(card)openModal(card.dataset.id)});
$('#cards').addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.classList.contains('card')){e.preventDefault();openModal(e.target.dataset.id)}});
$('#modalClose').addEventListener('click',()=>$('#detailModal').close());$('#detailModal').addEventListener('click',e=>{if(e.target===$('#detailModal'))$('#detailModal').close()});$('#detailModal').addEventListener('close',()=>{state.activeId=null});
$('#ratingStars').addEventListener('click',e=>{const button=e.target.closest('[data-rating]');if(!button)return;const n=Number(button.dataset.rating);if(ratings[state.activeId]===n)delete ratings[state.activeId];else ratings[state.activeId]=n;persist();updateModal();render()});$('#modalSave').addEventListener('click',()=>toggleSaved(state.activeId));
$('#clearFilters').addEventListener('click',()=>{state.search='';state.park='all';state.sort='rank';state.savedOnly=false;state.limit=16;$('#search').value='';$('#parkFilter').value='all';$('#sortFilter').value='rank';render()});
$('#loadMore').addEventListener('click',()=>{state.limit+=16;render()});
document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();$('#search').focus()}});
render();

const mappedCount=Object.values(osmDirectory.byPark||{}).reduce((n,items)=>n+items.length,0);
const mappedParks=Object.keys(osmDirectory.byPark||{}).length;
const snapshotDate=new Date(osmDirectory.generatedAt).toLocaleDateString('en-US',{year:'numeric',month:'short',day:'numeric'});
$('#directoryNotice').innerHTML=`<strong>Expanded directory</strong> · ${data.filter(x=>x.category==='parks').length} park listings, ${data.filter(x=>x.category==='rides').length} attractions, ${data.filter(x=>x.category==='restaurants').length} dining listings. Uses a snapshot of ${mappedCount} mapped points from ${mappedParks} park boundaries before deduplication (snapshot ${snapshotDate}${osmDirectory.failed?.length ? `; ${osmDirectory.failed.length} park refreshes failed` : ''}). <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">© OpenStreetMap contributors</a>. <span>OSM entries are unverified and may be missing, stale, misclassified, or duplicated. Park boundaries do not include every resort dining area; check operator listings. Seed scores are illustrative.</span>`;
