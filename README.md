# Parkside California directory

Open `index.html` in a web server, for example `python3 -m http.server 8000`, and visit the local server in a browser. The app is vanilla HTML/CSS/JavaScript and stores ratings and saved items in the browser's localStorage.

## Refresh the mapped directory

Run `python3 tools/refresh_osm.py` from the project folder. It uses Python's standard library and public OpenStreetMap/Overpass APIs to:

1. Discover named features mapped as theme parks or water parks in the California boundary. A cached discovery result is used if Overpass is unavailable.
2. Query named mapped attraction and dining features inside 46 explicitly identified park polygons. Large parks are split into tiles. It skips objects marked closed/disused. Failures preserve the last successful park data and are listed in the output.
3. Rebuild `osm-directory.js`, which the static site loads on its next refresh. Items include direct OpenStreetMap object links and retain stable OSM IDs for local ratings and saved places.

It may take several minutes and requires a network connection. The public services may rate-limit or fail. See the output and the `failed` field in the generated file. An empty result means nothing matched the tags, not that the park has no rides or dining. Discovery and the park-interior snapshot can be from different times if discovery falls back to cache.

## Important coverage limitations

This is **not an exhaustive or live list**. OpenStreetMap is volunteer-maintained, may be incomplete, out of date or misclassified, and its park boundaries may exclude resort hotels and shopping districts. Some named attractions are not rides; some mapped parks are not necessarily open. The operator-sourced seed data is also not a complete inventory. The script does not automatically discover or map interiors for every resort, and existing editorial scores are illustrative. Always verify current venues, dates, and opening status with the operator. Matching uses park and normalized name and can leave duplicates or fail to merge variants. The site identifies mapped discoveries as unverified, and links to their individual source objects.

Map data © OpenStreetMap contributors, available under the Open Database License: https://www.openstreetmap.org/copyright. Operator listing links are provided as references, not as a claim that all content has been audited.
