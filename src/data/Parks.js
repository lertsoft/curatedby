// All the data has been collected by Ronny Coste throughout the years.
/// ////////////////////////////////////////////////
/// ///////       Parks | Hiking       /////////////
/// ////////////////////////////////////////////////

const Parks = {
  type: 'FeatureCollection',
  features: [
    /// ////////////////////////////////////////////////
    /// ////////        United States       ////////////
    /// ////////////////////////////////////////////////
    {
      type: 'Feature',
      properties: {
        name: 'Zion National Park',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Zion National Park, Utah',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [37.3220921, -113.0432349],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Hawksbill Crag/Whitaker Point',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'Kingston, Arkansas',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [35.8983119, -93.4422835],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Mt Marcy',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'Adirondack Mountains, New York',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [44.112553, -73.9234763],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Breakneck Ridge Trail',
        description:
          'I have only gone that far once! it was a trip of a trail.',
        kind: 'Hiking',
        area: 'Hudson Highlands State Park, New York',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.4455492, -73.9750735],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Pacific Crest Trail',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'California, USA',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [38.224148, -119.6084177],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Kanawauke Picnic Area',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Bear Mountain, New York',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.2331601, -74.1175197],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'WNYC Transmitter Park',
        description:
          'A beautiful and big park with some hills in Greenpoint, Brooklyn.',
        kind: 'Park',
        area: 'Greenpoint, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7298447, -73.9607685],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Greenpoint Beach',
        description:
          'Small Park in Greenpoint, Brooklyn, get on the water at your own cost also something to note is that this park has a kaws sculpture sitting there waiting to be admired.',
        kind: 'Park',
        area: 'Greenpoint, Brooklyn',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7320705, -73.9619276],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Worlds Fair Playground',
        description:
          'Huge park in Corona/Flushing, Queens that has the Citi field, a museum, and a bunch of other activities. ',
        kind: 'Park',
        area: 'Corona, Queens',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7372706, -73.8458436],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Margaret Pace Park',
        description:
          'My fave park in Miami, it has a view of Miami Beach, the island that is, not Miami propel, and it is pretty quiet and nice to relax. At least when I visited.',
        kind: 'Park',
        area: 'Midtown, Miami',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [25.79298, -80.1859595],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Fort Tryon Park',
        description:
          'Beautiful park with a beautiful view of Jersey. Go during sunset, One of the best sunsets I have seen was from that high-up vantage point that the park offers. This is in Washington Heights, Manhattan.',
        kind: 'Park',
        area: 'Inwood, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8625608, -73.9312995],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Rimrock Trailhead',
        description:
          'Awesome trail in PA / Upstate NY, it has a cool view of the reservoir, it is so so peaceful up there. That peacefulness comes out with the price of being in bear country so plan accordingly lmao ',
        kind: 'Hiking',
        area: 'Scandia, PA',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.851917, -78.9549322],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Beacon Overlook',
        description:
          'Cool Park, Trail, Hike. Not that hard if you are somewhat athletic. The place where everyone in New York City goes hiking so it is crowded on the weekends, Go on a weekday if you`d like to be outside of the city with not a lot of city people.',
        kind: 'Hiking',
        area: 'Beacon, NY',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.4884873, -73.953242],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Elizabeth Street Garden',
        description:
          'Small park, with sculptures in the middle of SoHo, Manhattan. Save Elizabeth Street Garden! Developers want to destroy to build more expensive housing.',
        kind: 'Park',
        area: 'Nolita, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7221885, -73.9946104],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Hunters Point South Park',
        description:
          'I am going to start with... I saw Cold Play perform here for free!! Huge park in hunts point, Queens where they hold concerts, and have beach volleyball set up for us. The sunset is beautiful here with an awesome and unique view of Manhattan with the United Nations building being the center of it.',
        kind: 'Park',
        area: 'Long Island City, Queens',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7408816, -73.9616912],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Bonticou Crag',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'New Paltz, NY',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.7889821, -74.1179215],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Gertrudes Nose',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'New Paltz, NY',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.6945379, -74.2482045],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Hudson Highlands State Park',
        description: 'Chill trail in Beacon NY.',
        kind: 'Hiking',
        area: 'Beacon, NY',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.4839096, -73.9693588],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Beacon Mountain',
        description:
          'Beacon is a cool hike. Mostly based on a staircase that goes all the way to the top. It has rails, and other mining, and telecom equipment from the 1960. 1970? I forgot but it is cool to see.',
        kind: 'Hiking',
        area: 'Beacon, NY',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.4812, -73.9449],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Storm King State Park',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'Storm King State Park, NY',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.4321589, -74.0121064],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Bear Mountain State Park',
        description:
          'Bear Mountain is another easy to get New York City hike for peeps that like and enjoy nature, and hiking. So plan accordingly if you plan on going on the weekends... it might not matter as much here because it is pretty big.',
        kind: 'Hiking',
        area: 'Bear Mountain State Park, NY',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.2846114, -74.0006445],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Suffern - Bear Mountain Trailhead',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Bear Mountain, NY',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.1189071, -74.1577971],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Shore Trail',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'Jersey City, NJ',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.991471, -73.9045199],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Sleeping Giant State Park',
        description:
          'Interesting park in Connecticut with an overlook of Iona University. Pretty Easy hike, Beginners friendly.',
        kind: 'hiking',
        area: 'Sleeping Giant State Park, CT',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.4209689, -72.8992361],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Delaware Water Gap National Recreation Area',
        description:
          'Huge and beautiful park, with great hikes. It has some water reservoir dedicated to NYC. Inside a national park.',
        kind: 'hiking',
        area: 'Delaware Water Gap Park, PA',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.1043946, -74.9442586],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Pier 25 at Hudson River Park',
        description: 'Favorite pier of them all!',
        kind: 'Park',
        area: 'Tribeca, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7203108, -74.014345],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Little Island',
        description:
          'Small concrete island in the waters next to Chelsea / Meatpacking built by a rich architect ',
        kind: 'Park',
        area: 'Meatpacking District, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7420658, -74.0107073],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Hudson River Park',
        description:
          'I love how Manhattan has so many parks by the water. This is one of my favorites. This park goes from battery park to 42st unofficially.',
        kind: 'Park',
        area: 'Manhattan, NY',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7492961, -74.009261],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Van Cortlandt Park',
        description:
          'I have not been here yet but I have read that this is the only park in NYC that has original forestry left.',
        kind: 'Park',
        area: 'Bronx, NY',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8972233, -73.8860668],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Fort Tilden',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Far Rockaway, NY',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.5620227, -73.895756],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'North Brother Island',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Bronx, NY',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8007677, -73.8984231],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Fort Wadsworth',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Staten Island, NY',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6044772, -74.0599693],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: '40°34`06.3"N 73°51`53.0"W',
        description:
          'I have not been here yet. Abandoned warehouse/fort in far rockaway.',
        kind: 'Park',
        area: 'Far Rockaway, NY',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.5685127, -73.8648307],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Windsor State Forest',
        description:
          'I have not been here yet. During fall or spring, this intersection looks pretty from all the change of colors.',
        kind: 'Park',
        area: 'Windsor, MA',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [42.5089977, -73.0461521],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Red Hook Grain Terminal',
        description:
          'I have not been here yet. Abandoned terminal that has a rooftop but it is not that easy to get to.',
        kind: 'Park',
        area: 'Brooklyn, NY',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.669436, -74.0064047],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Blue Horizon',
        description: 'I have not been here yet. Abandoned recreational center.',
        kind: 'Abandoned',
        area: 'Philladelphia, PA',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [39.9738085, -75.1592429],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Centralia',
        description: 'I have not been here yet. Abandoned town.',
        kind: 'Abandoned',
        area: 'Centralia, PA',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8045109, -76.341925],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Nevele Grande Resort',
        description: 'I have not been here yet.',
        kind: 'Abandoned',
        area: 'New York, USA',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.6988224, -74.4028842],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Presidents Park',
        description: 'I have not been here yet.',
        kind: 'Abandoned',
        area: 'Virginia, USA',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [37.2669492, -76.6877638],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Wave Hill Public Garden & Cultural Center',
        description: 'I have not been here yet.',
        kind: 'Garden',
        area: 'Bronx, NY',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8978851, -73.9117588],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Belgrade Lakes',
        description:
          'I have not been here yet but this lake offers awesome sunset/sunrise photos.',
        kind: 'Lakes',
        area: 'Belgrade, Maine',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [44.5270064, -69.8855101],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Natural Stone Bridge & Caves',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'Pottersville, New York',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [43.7475159, -73.8514579],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Lake George',
        description:
          'I have not been here yet but the photos that I have seen of this lake from this town are making me want to go so bad.',
        kind: 'Small Town',
        area: 'Lake George, New York',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [43.4261675, -73.7123366],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Turkey Mountain',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'Yorktown Heights, New York',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.2478714, -73.7979121],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Capitol Reef National Park',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Capitol Reef National Park, UTAH',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [38.1202645, -111.1456716],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Bryce Canyon National Park',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Bryce Canyon National Park, UTAH',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [37.5733797, -112.1783135],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Arches National Park',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Arches National Park, UTAH',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [38.7318352, -109.5856415],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Montezuma Castle National Monument',
        description:
          'I have not been here yet but this momument is on a native american reservation.',
        kind: 'Monument',
        area: 'Camp Verde, Arizona',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [34.6115755, -111.8349854],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Mesa Verde National Park',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Mesa Verde, Colorado',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [37.2428606, -108.4654568],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Canyonlands National Park',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Canyonlands National Park, UTAH',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [38.2269533, -109.9005907],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Half Dome',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'Yosemite Valley, California',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [37.7474364, -119.5330114],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Torrey Pines State Natural Reserve',
        description:
          'I have not been here yet but California hikes look like a great time.',
        kind: 'Hiking',
        area: 'San Diego, California',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [32.9268576, -117.2593912],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Mt. Soledad National Veterans Memorial',
        description:
          'I have not been here yet but at the peak of the hill you can have an overlook of the entirety of San Diego which is cool.',
        kind: 'Park',
        area: 'San Diego, California',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [32.8399984, -117.2453039],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Flat Rock Beach Trailhead',
        description:
          'I have not been here yet but California hikes looks like a great time.',
        kind: 'Hiking',
        area: 'San Diego, California',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [32.9197745, -117.2536116],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'VITAL Climbing Gym - West Harlem',
        description: 'I have not been here yet.',
        kind: 'Rock Climbing',
        area: 'West Harlem, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8167247, -73.9580396],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Kaaterskill Falls',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'Catskills, New York',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [42.1937353, -74.0642294],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Gasworks Park Marina',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Seattle, Washington',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [47.6471284, -122.3325622],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Yosemite National Park',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Yosemite National Park, California',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [37.8533091, -119.55111],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Berkshires',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'The Berkshires, Massachusetts',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [42.2352488, -73.1936019],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Yellowstone National Park',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Yellowstone National Park, Wyoming',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [44.4279679, -110.5884542],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Coyote Gulch',
        description: 'I have not been here yet.',
        kind: 'Travel',
        area: 'Glen Canyon National Recreation Area, Utah',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [37.4282437, -110.9808555],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Big Sky',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'Big Sky, Montana',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [45.2617841, -111.3080159],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Grand Canyon National Park',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Grand Canyon National Park, Arizona',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [36.088433, -112.1111396],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Enchanted Valley',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'Enchanted Valley, Washington',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [47.6686231, -123.3943046],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Big Sur',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'Big Sur, California',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [36.2717301, -121.8075025],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Hanging Lake',
        description: 'I have not been here yet.',
        kind: 'Lake',
        area: 'Hanging Lake, Colorado',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [39.601392, -107.1918609],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Flathead Lake',
        description:
          'I have not been here yet but this is one of the clearest water lakes in the world! One of the other is in Sweeden.',
        kind: 'Lake',
        area: 'Flathead Lake, Montana',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [47.8910242, -114.1823648],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Joshua Tree National Park',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Joshua Tree National Park, California',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [33.8999818, -115.8606807],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Badlands National Park',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Badlands National Park, South Dakota',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [43.8446153, -102.3408059],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Porcupine Wash',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'Joshua Tree National Park, California',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [33.8449295, -115.7783174],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Acadia National Park',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Acadia National Park, Maine',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [44.3361204, -68.2765056],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Lake Coeur d`Alene',
        description:
          'I have not been here yet but it has some scenic lake cycling trails, swimming beaches & bald eagle sightings.',
        kind: 'Lake',
        area: 'Lake Coeur d`Alene, Idaho',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [47.6707874, -116.7869783],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Deer Lake',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Ishpeming Township, Michigan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [46.5250695, -87.6818296],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Torch Lake',
        description: 'I have not been here yet.',
        kind: 'Lake',
        area: 'Torch Lake, Michigan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [44.9781913, -85.3153834],
      },
    },

    /// ////////////////////////////////////////////////
    /// //////     Domininican Republic     ///////////
    /// ////////////////////////////////////////////////
    {
      type: 'Feature',
      properties: {
        name: 'La Peñita',
        description:
          'Awesome place to cliff jump! There are two different cliffs a big one which is about 3 stories high and a small one which is about 1 story high. In the small one, you could feel the floor of the coral depending on where you jumped. Also, be careful of thieves as the area has gotten popular it has gotten their attention. Other than that pretty cool spot to jump into the ocean and have some adventure fun.',
        kind: 'Cliff',
        area: 'Boca Chica, Republica Dominicana',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4317816, -69.5696174],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'The 3 Eyes National Park',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Santo Domingo, Republica Dominicana',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4805811, -69.8431322],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Paseo de Doña Blanca',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Puerto Plata, DR',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [19.7985932, -70.6936937],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Valle Nuevo National Park',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'La Vega, Republica Dominicana',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.8463327, -70.7406358],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Indigenous Eyes Ecological Reserve',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Punta Cana, Republica Dominicana',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.5137242, -68.3791346],
      },
    },
    /// ////////////////////////////////////////////////
    /// //////////         Americas       /////////////
    /// ////////////////////////////////////////////////
    {
      type: 'Feature',
      properties: {
        name: 'Edith Cavell Trail',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'Alberta, Canada',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [52.6816899, -118.0408537],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Mount Royal',
        description:
          'I have not been here yet but this mountain has an awesome view of Montreal!',
        kind: 'Hiking',
        area: 'Montreal, Canada',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [45.5071367, -73.5875069],
      },
    },
    /// ////////////////////////////////////////////////
    /// //////////         Europe       /////////////
    /// ////////////////////////////////////////////////

    {
      type: 'Feature',
      properties: {
        name: 'Jungfraujoch',
        description:
          'I have not been here yet but this place has the highest railway in Europe that takes visitors to this glacier saddle that also has an observatory.',
        kind: 'Hiking',
        area: 'Lauterbrunnen, Switzerland',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [46.548276, 7.9806434],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Sulak Canyon',
        description:
          'I have not been here yet but this is supposed to be the deepest canyon in the entire world.',
        kind: 'Park',
        area: 'Republic of Dagestan, Russia',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [43.0211216, 46.8255206],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Jungfrau',
        description:
          'I have not been here yet. This is the peak of Europe, The peak of the highest mountain over there.',
        kind: 'Hiking',
        area: 'Lauterbrunnen, Switzerland',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [46.5367835, 7.9625955],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Calanque de Sugiton',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'Calanque de Sugiton, France',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [43.2104793, 5.455583],
      },
    },

    /// ////////////////////////////////////////////////
    /// //////////         Asia       /////////////
    /// ////////////////////////////////////////////////

    {
      type: 'Feature',
      properties: {
        name: '"45°57`53.3"" N 63°18`18.4" E" S',
        description:
          'I have not been here yet. This is supposed to be an abandoned Soviet town that has some of the nuclear tests performed on.',
        kind: 'Park',
        area: 'Ayteke Bi-District, Kazakhstan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [50.0604273, 61.5780236],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Timna Park',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Timna Park, Israel',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [29.7882452, 35.0031576],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Bahá`í Gardens Haifa - Balcony (Bahá`í Holy Place)',
        description: 'I have not been here yet.',
        kind: 'Garden',
        area: 'Haifa, Israel',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [32.811364, 34.9852756],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Batangas',
        description:
          'I have not been here yet but this place was recommended by a friend of mine from the Philippines.',
        kind: 'Hiking',
        area: 'Batangas, Philippines',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [13.88343, 120.9783636],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Mount Hiei',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'Kyoto, Japan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [35.0622472, 135.8315317],
      },
    },

    /// ////////////////////////////////////////////////
    /// //////////         Africa         /////////////
    /// ////////////////////////////////////////////////

    {
      type: 'Feature',
      properties: {
        name: 'Mosi-Oa-Tunya Falls',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'Mosi-o-tunya, Zambia',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [-17.9256587, 25.8624953],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Devil`s Peak',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'Cape Town, South Africa',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [-33.9548616, 18.4394575],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Lion`s Head',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'Cape Town, South Africa',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [-33.935037, 18.3889709],
      },
    },
    /// ////////////////////////////////////////////////
    /// //////////         Oceania      /////////////
    /// ////////////////////////////////////////////////
    {
      type: 'Feature',
      properties: {
        name: 'Roys Peak',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'Wānaka, New Zealand',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [-44.6999994, 169.05],
      },
    },
  ],
};

export default Parks;
