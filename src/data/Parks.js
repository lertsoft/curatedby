const Parks = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'WNYC Transmitter Park',
        description:
          'A beautiful and big park with some hills in Greenpoint, brooklyn.',
        kind: 'Park',
        area: 'Greenpoint, brooklyn',
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
          'Small Park in Greenpoint, Brooklyn, get on the water at your own cost.',
        kind: 'Park',
        area: 'Greenpoint, brooklyn',
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
          'Huge park in corona / flushing, queens that has the citi field, a museum and a bunch of other activities. ',
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
          'My fave park in Miami, it has a view of Miami Beach, the island that is, not Miami propel, and it is pretty quiet and nice to relax. At least when i visited.',
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
          'Beautiful park with a beautiful view of Jersey. Go during sunset, One of the best sunsets i have seen was from that high up vantage point that the park offers. This is in Washington Heights, Manhattan.',
        kind: 'Park',
        area: 'Inwood, Manhattan',
        visits: '1',
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
          'Awesome trail in PA / Upsate NY, it has cool view of the reservoir, it is so so peaceful up there. That peacefulness comes out with the price of being in bear country so plan accordingly lmao ',
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
          'Cool Park, Trail, Hike. Not that hard if you are somewhat athletic. Place were everyone in New York City goes hiking so it is crowded in the weekends, Go on a weekday if you`d like to be outside of the city with not a lot of city people.',
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
          'Huge park in hunts point, Queens were they hold concerts, and have beach volleyball set up for us. The sunset are beautiful here with an awesome and unique view of manhattan with the United Nations building being the center of it.',
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
        description: 'Chill trail in beacon NY.',
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
          'Beacon is an cool hike. Mostly based of aa staircase that goes all the way to the top. It has rails, and other mining, telecom equipment from the 1960? 1970? I forgot but it is cool to see.',
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
          'Bear mountain is another easy to get New York City hike for peeps that like and enjoy nature, and hiking. So plan accordingly if you plan on going on the weekends... it might not matter as much here because it is pretty big.',
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
          'Interesting park in Connecticut with a overlook of Iona University. Pretty Easy hike, Beginners friendly.',
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
          'Small concrete island in the waters next to Chelsea / Meatpacking build by an rich architect ',
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
          'I love how manhattan have so many parks by the water. This is one of my favorites. This park goes from battery park to 42st unofficially.',
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
        description: 'I have not been here yet.',
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
        coordinates: [40.5441972, -73.8726985],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: '"45°57`53.3""N 63°18`18.4""E"S',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Ayteke Bi District, Kazakhstan',
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
        coordinates: [40.7420658, -74.0107073],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: '40°34`06.3"N 73°51`53.0"W',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Far Rockaway, NY',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.5707902, -73.8867172],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Windsor State Forest',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Windsor, MA',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [42.5189219, -73.029752],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Red Hook Grain Terminal',
        description: 'I have not been here yet.',
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
        description: 'I have not been here yet.',
        kind: 'Abandoned',
        area: 'Philladelphia, PA',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [39.9683941, -75.1293572],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Centralia',
        description: 'I have not been here yet.',
        kind: 'Abandoned',
        area: 'Centralia, PA',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8002974, -76.3455618],
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
        coordinates: [40.8978516, -73.9136389],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Belgrade Lakes',
        description:
          'I have not been here yet but this lake offers awesome sunset / sunrise photos.',
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
        name: 'Mt Marcy',
        description: 'I have not been here yet.',
        kind: 'Hiking',
        area: 'Adirondack Mountains, New York',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [44.0696416, -74.2468779],
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
        coordinates: [43.7426903, -73.9180556],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Lake George',
        description:
          'I have not been here yet but the photos that i have seen of this lake from this town are making me want to go so bad.',
        kind: 'Small Town',
        area: 'Lake George, New York',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [43.4323547, -73.730076],
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
        name: 'Paseo de Doña Blanca',
        description: 'I have not been here yet.',
        kind: 'Park',
        area: 'Puerto Plata, DR',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [19.7986158, -70.6954812],
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
        coordinates: [42.2496615, -73.9863915],
      },
    },

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
  ],
};

export default Parks;
