// Expanded directory. Entries are unscored until a user rates them.
// Source links point to the relevant operator's directory, where availability can be checked.
const directoryParks = [
 ['LEGOLAND California','Carlsbad','https://www.legoland.com/california/'],
 ['LEGOLAND California Water Park','Carlsbad','https://www.legoland.com/california/water-park/'],
 ['SeaWorld San Diego','San Diego','https://seaworld.com/san-diego/'],
 ['Sesame Place San Diego','Chula Vista','https://sesameplace.com/san-diego/'],
 ["California’s Great America",'Santa Clara','https://www.cagreatamerica.com/'],
 ['South Bay Shores','Santa Clara','https://www.cagreatamerica.com/south-bay-shores'],
 ['Six Flags Discovery Kingdom','Vallejo','https://www.sixflags.com/discoverykingdom'],
 ['Santa Cruz Beach Boardwalk','Santa Cruz','https://beachboardwalk.com/'],
 ['Gilroy Gardens','Gilroy','https://www.gilroygardens.org/'],
 ['Pacific Park','Santa Monica','https://pacpark.com/'],
 ['Belmont Park','San Diego','https://www.belmontpark.com/'],
 ['Castle Park','Riverside','https://www.castlepark.com/'],
 ['Adventure City','Anaheim','https://www.adventurecity.com/'],
 ['Funderland Amusement Park','Sacramento','https://www.funderlandpark.com/'],
 ["Children’s Fairyland",'Oakland','https://fairyland.org/'],
 ['Sonoma TrainTown Railroad','Sonoma','https://www.traintown.com/'],
 ["SkyPark at Santa’s Village",'Skyforest','https://skyparksantasvillage.com/'],
 ['Knott’s Soak City','Buena Park','https://www.knotts.com/soak-city'],
 ['Raging Waters Los Angeles','San Dimas','https://www.ragingwaters.com/'],
 ['Hurricane Harbor Los Angeles','Valencia','https://www.sixflags.com/hurricaneharborla'],
 ['Hurricane Harbor Concord','Concord','https://www.sixflags.com/hurricaneharborconcord'],
 ['Wild Rivers','Irvine','https://wildrivers.com/'],
 ['Great Wolf Lodge Southern California','Garden Grove','https://www.greatwolf.com/southern-california'],
 ['The Wave Waterpark','Vista','https://www.thewavewaterpark.com/'],
 ['The Cove Waterpark','Riverside','https://www.covewaterpark.com/'],
 ['Island Waterpark','Fresno','https://www.islandwaterpark.com/'],
 ['Wild Water Adventure Park','Clovis','https://wildwater.net/'],
 ['DropZone Waterpark','Perris','https://www.dropzonewaterpark.com/'],
 ['Roseville Golfland Sunsplash','Roseville','https://www.golfland.com/roseville/'],
 ['The Ravine Waterpark','Paso Robles','https://www.ravinewaterpark.com/'],
 ['WaterWorks Park','Redding','https://www.waterworkspark.com/'],
 ['DryTown Water Park','Palmdale','https://www.drytownwaterpark.com/'],
 ['Splash! La Mirada Regional Aquatics Center','La Mirada','https://www.splashlamirada.com/'],
 ['Antioch Water Park','Antioch','https://www.antiochca.gov/recreation/water-park/']
];
const sourceByPark={
 'Disneyland Park':'https://disneyland.disney.go.com/attractions/',
 'Disney California Adventure':'https://disneyland.disney.go.com/attractions/',
 'Disneyland Resort':'https://disneyland.disney.go.com/dining/',
 'Universal Studios Hollywood':'https://www.universalstudioshollywood.com/',
 'Six Flags Magic Mountain':'https://www.sixflags.com/magicmountain/attractions',
 "Knott's Berry Farm":'https://www.knotts.com/rides-experiences',
 ...Object.fromEntries(directoryParks.map(p=>[p[0],p[2]]))
};
const extraGroups=[
 ['rides','Disneyland Park','Anaheim','https://disneyland.disney.go.com/attractions/',`Star Wars: Rise of the Resistance|Big Thunder Mountain Railroad|Haunted Mansion|Pirates of the Caribbean|Jungle Cruise|Tiana's Bayou Adventure|Matterhorn Bobsleds|Millennium Falcon: Smugglers Run|Mickey & Minnie's Runaway Railway|Buzz Lightyear Astro Blasters|Star Tours – The Adventures Continue|Autopia|Alice in Wonderland|Dumbo the Flying Elephant|Peter Pan's Flight|Snow White's Enchanted Wish|Pinocchio's Daring Journey|Mr. Toad's Wild Ride|Mad Tea Party|King Arthur Carrousel|Casey Jr. Circus Train|Storybook Land Canal Boats|it's a small world|The Many Adventures of Winnie the Pooh|Roger Rabbit's Car Toon Spin|Chip 'n' Dale's GADGETcoaster|Disneyland Railroad|Mark Twain Riverboat|Sailing Ship Columbia|Davy Crockett's Explorer Canoes|Main Street Vehicles|Astro Orbitor|Finding Nemo Submarine Voyage`],
 ['rides','Disney California Adventure','Anaheim','https://disneyland.disney.go.com/attractions/',`Guardians of the Galaxy – Mission: BREAKOUT!|Incredicoaster|Grizzly River Run|Soarin' Across America|Toy Story Midway Mania!|WEB SLINGERS: A Spider-Man Adventure|Goofy's Sky School|The Little Mermaid – Ariel's Undersea Adventure|Monsters, Inc. Mike & Sulley to the Rescue!|Mater's Junkyard Jamboree|Luigi's Rollickin' Roadsters|Silly Symphony Swings|Jumpin' Jellyfish|Golden Zephyr|Inside Out Emotional Whirlwind|Pixar Pal-A-Round|Jessie's Critter Carousel`],
 ['rides',"Knott's Berry Farm",'Buena Park','https://www.knotts.com/rides-experiences',`HangTime|Xcelerator The Ride|Silver Bullet|Sierra Sidewinder|Pony Express|Jaguar!|Coast Rider|Calico Mine Ride|Calico River Rapids|Timber Mountain Log Ride|Supreme Scream|Sol Spin|Wipeout|Pacific Scrambler|La Revolucion|Los Voladores|Hat Dance|Carrusel de California|Calico Railroad|Surfside Gliders|Flying Ace|Beagle Express Railroad|Snoopy's Tenderpaw Twister Coaster|Knott's Bear-y Tales: Return to the Fair|Camp Snoopy's Off-Road Rally|Pig-Pen's Mud Buggies|Linus Launcher|Charlie Brown's Kite Flyer|Wheeler Dealer Bumper Cars|Sky Cabin`],
 ['rides','Six Flags Magic Mountain','Valencia','https://www.sixflags.com/magicmountain/attractions',`Apocalypse|BATMAN The Ride|CraZanity|Full Throttle|Gold Rusher|Goliath|LEX LUTHOR: Drop of Doom|Ninja|Scream|Tatsu|The New Revolution - Classic|THE RIDDLER's Revenge|Viper|West Coast Racers|X2|Buccaneer|Jammin' Bumpers|JUSTICE LEAGUE: Battle for Metropolis|Road Runner Express|Roaring Rapids|Scrambler|Swashbuckler|THE FLASH Speed Force|WONDER WOMAN Lasso of Truth|Canyon Blaster|Daffy's Adventure Tours|Elmer's Weather Balloons|Grand American Carousel|Magic Flyer|Merrie Melodies Carousel|Speedy Gonzales Hot Rod Racers|Sylvester's Pounce and Bounce|Taz's Trucking Co.|Tweety's Escape|Yosemite Sam's Flight School`],
 ['rides','Universal Studios Hollywood','Universal City','https://www.universalstudioshollywood.com/',`Fast & Furious Hollywood Drift|Mario Kart: Bowser's Challenge|Revenge of the Mummy – The Ride|TRANSFORMERS: The Ride-3D|Flight of the Hippogriff|The Secret Life of Pets: Off the Leash|Despicable Me Minion Mayhem|The World-Famous Studio Tour`],
 ['rides','LEGOLAND California','Carlsbad','https://www.legoland.com/california/things-to-do/theme-park/rides/',`Galacticoaster|G Force Test Facility|Launch & Land|Beetle Bounce|BIONICLE Blaster|Captain Cranky's Challenge|Cargo Ace|Coast Cruise|Coastersaurus|The Dragon|Driving School|DUPLO Little Dino Trail|Emmet's Flying Adventure Ride|Explorer River Quest|Junior Driving School|Kid Power Tower|LEGO CITY: Deep Sea Adventure|LEGO NINJAGO The Ride|LEGO Technic Coaster|LEGOLAND Express|Lost Kingdom Adventure|Queen Watevra's Carousel|Pirate Reef|Royal Joust|Skipper School|Unikitty's Disco Drop`],
 ['rides','LEGOLAND California Water Park','Carlsbad','https://www.legoland.com/california/water-park/',`Build-a-Raft River|Cragger's Swamp|Crooler's Twist|Crug's Run|DUPLO Splash Safari|Joker Soaker|Lion Temple Wave Pool|Orange Rush|Riptide Racers|Soak-N-Sail|Splash Out|Twin Chasers|Wipeout Lagoon`],
 ['rides','SeaWorld San Diego','San Diego','https://seaworld.com/san-diego/rides/',`Arctic Rescue|Emperor|Manta|Electric Eel|Journey to Atlantis|Shipwreck Rapids`],
 ['rides','Knott’s Soak City','Buena Park','https://www.knotts.com/soak-city',`Shore Break|The Wedge|Tidal Wave Bay|Sunset River|Gremmie Lagoon|Laguna Storm Watch Tower|Malibu Run|Beach House Slides`],
 ['rides','Wild Rivers','Irvine','https://wildrivers.com/',`Bora Bora Boomerango|Aquaconda|Castaway River|Kontiki Cove|Shaka Bay Wavepool`],
 ['rides','Raging Waters Los Angeles','San Dimas','https://www.ragingwaters.com/',`Aqua Rocket|Dragon's Den|Ragin' Racer`],
 ['rides','Hurricane Harbor Los Angeles','Valencia','https://www.sixflags.com/hurricaneharborla',`Bonzai Pipelines|Tornado|River Cruise`],
 ['rides','Santa Cruz Beach Boardwalk','Santa Cruz','https://beachboardwalk.com/',`Giant Dipper|Looff Carousel|Vertigo 360`],
 ['rides',"California’s Great America",'Santa Clara','https://www.cagreatamerica.com/',`Demon|Flight Deck|Patriot|Gold Striker|RailBlazer|Carousel Columbia`],
 ['restaurants','Disneyland Park','Anaheim','https://disneyland.disney.go.com/dining/',`Alien Pizza Planet|Bengal Barbecue|Cafe Daisy|Cafe Orleans|Carnation Cafe|Docking Bay 7 Food and Cargo|Edelweiss Snacks|Galactic Grill|Gibson Girl Ice Cream Parlor|The Golden Horseshoe|Harbour Galley|Hungry Bear Barbecue Jamboree|Jolly Holiday Bakery Cafe|Kat Saka's Kettle|Market House|Maurice's Treats|Milk Stand|Mint Julep Bar|Oga's Cantina|Plaza Inn|Rancho del Zocalo Restaurante|Red Rose Taverne|Stage Door Cafe|Tiana's Palace|Tiki Juice Bar|The Tropical Hideaway|Ronto Roasters|Refreshment Corner`],
 ['restaurants','Disney California Adventure','Anaheim','https://disneyland.disney.go.com/dining/',`Adorable Snowman Frosted Treats|Angry Dogs|Aunt Cass Cafe|Award Wieners|Bayside Brews|Boardwalk Pizza and Pasta|Cappuccino Cart|Carthay Circle Lounge|Carthay Circle Restaurant|Clarabelle's Hand-Scooped Ice Cream|Cocina Cucamonga Mexican Grill|Corn Dog Castle|Cozy Cone Motel|Fairfax Market|Fiddler, Fifer & Practical Cafe|Fillmore's Taste-In|Flo's V8 Cafe|Ghirardelli Soda Fountain and Chocolate Shop|Hollywood Lounge|Jack-Jack Cookie Num Nums|The Lucky Fortune Cookery|Magic Key Terrace|Mendocino Terrace|Paradise Garden Grill|Port of San Fransokyo Cerveceria|Poultry Palace|Pym Tasting Lab|Pym Test Kitchen|Rita's Baja Blenders|Señor Buzz Churros|Schmoozies|Shawarma Palace|Smokejumpers Grill|Sonoma Terrace|Terran Treats|Wine Country Trattoria`],
 ['restaurants','Disneyland Resort','Anaheim','https://disneyland.disney.go.com/dining/',`Ballast Point Brewing Co.|Black Tap Craft Burgers & Shakes|Céntrico|Din Tai Fung|Earl of Sandwich|GG's Chicken Shop|Jamba|Goofy's Kitchen|Trader Sam's Enchanted Tiki Bar|Tangaroa Terrace|Palm Breeze Bar|Coffee House|Napa Rose|GCH Craftsman Bar|Storytellers Cafe|Naples Ristorante e Bar|Napolini Pizzeria|Jazz Kitchen Coastal Grill & Patio|Splitsville Luxury Lanes – Dining`],
 ['restaurants','SeaWorld San Diego','San Diego','https://seaworld.com/san-diego/dining/',`Dine with Orcas|Rita's Italian Ice|Dreyer's Ice Cream Parlor|Manta Pizza|Explorer's Café|Calypso Bay Smokehouse|Hibisco Modern Mexican|The Chicken Snack Shack|Shipwreck Café`],
 ['restaurants','LEGOLAND California','Carlsbad','https://www.legoland.com/california/',`Pizza Pasta Buffet|Knight's Smokehouse BBQ|Everything is Ramen|The U.F.O. – Ultimate Food Outlet|Satellite Bites|Stardust Treats`],
 ['restaurants','LEGOLAND California Water Park','Carlsbad','https://www.legoland.com/california/water-park/',`Beach Front Grill`],
 ['restaurants','Santa Cruz Beach Boardwalk','Santa Cruz','https://beachboardwalk.com/food/',`Boardwalk Grille|Seaside Fish & Chowder|Surf City Grill|Dipper Burgers|Marini's at the Beach`],
 ['restaurants','Universal Studios Hollywood','Universal City','https://www.universalstudioshollywood.com/',`The Toothsome Chocolate Emporium & Savory Feast Kitchen`]
];
// Additional operator-listed dining outside park gates (districts and resort hotels).
extraGroups.push(
 ['restaurants','Disneyland Resort','Anaheim','https://disneyland.disney.go.com/dining/downtown-disney-district/',`CrazyShake Window by Black Tap|Beignets Expressed|Salt & Straw|Starbucks|Wetzel's Pretzels|Big Boi Lumpia Co.|Blue Ribbon Corn Dog|California Churro|Cathy's Cookies|Gordon Ramsay at The Carnaby|Happy Ice|Kayla's Cake|Parkside Market Coffee|Paseo|Seoul Sister|Tiendita|Vista Parkside Market|Wetzel's Pretzels Cart|GCH Craftsman Grill|Great Maple Modern American Eatery`],
 ['restaurants','Universal CityWalk Hollywood','Universal City','https://www.universalstudioshollywood.com/web/en/us/things-to-do/dining/citywalk',`Hello Kitty and Friends Cafe|VIVO Italian Kitchen|NBC Sports Grill & Brew|Margaritaville|Antojitos Cocina Mexicana|Voodoo Doughnut|Menchie's Frozen Yogurt|The Toothsome Chocolate Emporium & Savory Feast Kitchen`],
 ['restaurants',"Knott's Berry Farm",'Buena Park','https://www.knotts.com/dining',`Casa California Restaurante|Prop Shop Pizzeria|Boardwalk BBQ|Calico Saloon|Charleston Circle Coffee|Fireman's BBQ|Cave Inn|Coasters|Sutter's Grill|Grizzly Creek Lodge|Wilderness Broiler|Calico Tater Spot`],
 ['restaurants','Knott’s Soak City','Buena Park','https://www.knotts.com/dining/portside-pizza',`Longboard's Grill|Portside Pizza`]
);
