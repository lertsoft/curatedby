const cafes = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Orwashers Bakery',
        description: 'I have not been here yet.',
        kind: 'Bakery',
        area: 'Upper East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7722982, -73.954946],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Arsicault Bakery',
        description: 'I have not been here yet.',
        kind: 'Bakery',
        area: 'San Francisco, CA',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [37.7834259, -122.4593062],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Artshack Cafe/ Bar',
        description: '',
        kind: 'Cafe',
        area: 'Bed-Stuy, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6848772, -73.9561891],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: '9TAILS COFFEE SHOP',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'Central Harlem, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.807471, -73.943276],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Felix Roasting Co.',
        description:
          'A big coffee shop in soho, beautiful design on the inside, and that design reminds me of the look Wes Anderson has on his movies. Which always brings inspires me to go back.',
        kind: 'Cafe',
        area: 'SoHo, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7244058, -73.9995923],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Remi43 Flower & Coffee',
        description:
          'Coffee shops with a flower shop inside are now trendy in NYC. This coffee one block away from the United Nations is a beautiful cafe.',
        kind: 'Cafe',
        area: 'Midtown East, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7506224, -73.9713282],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Hex & Company (UES)',
        description:
          '1 out of 3 Gaming cafe, that I know of, this one is in Upper East Side. Coffee shop and Gaming cafe is awesome for meeting with friends or dates, and play games. The variety of games available here will definitely overwhelm you haha',
        kind: 'Cafe',
        area: 'Upper East side, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7703728, -73.953777],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Hex & Company (UWS)',
        description:
          '1 out of 3 Gaming cafe, that I know of, This one is in Upper West Side by Columbia University. Coffee shop and Gaming cafe is awesome for meeting with friends or dates, and play games. The variety of games available here will definitely overwhelm you haha',
        kind: 'Cafe',
        area: 'Upper West Side, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8065907, -73.965241],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Uncommons',
        description:
          '1 out of 3 Gaming cafe, that I know of, this one is in Greenwich Village? Soho? Well under Washington Sq Park close to all the NYU buildings. Coffee shop and Gaming cafe is awesome for meeting with friends or dates, and play games. The variety of games available here will definitely overwhelm you haha',
        kind: 'Cafe',
        area: 'NoHo, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7294104, -73.9987065],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Patent Coffee',
        description:
          'Coffee in midtown were the barista (Lorenzo and Jonathan) make some fire ass coffee. Go visit them!! Also behind the coffee shop there is a speakeasy after 5pm.',
        kind: 'Cafe',
        area: 'Midtown, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7452234, -73.9902283],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Choice Market',
        description:
          'Fire ass breakfast food in the coffee shop in Clinton hill.',
        kind: 'Cafe',
        area: 'Clinton Hill, Brooklyn',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6884013, -73.9629705],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Little Canal',
        description: 'Dimes Square is alive and well thank you!',
        kind: 'Cafe',
        area: 'Dimes Square, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.71434, -73.9904271],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Rincon Argentino',
        description:
          'Get your mate (mah-teh) while in cold spring please!! Support the owner she is really sweet and nice.',
        kind: 'Cafe',
        area: 'Cold Spring, NY',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.4163195, -73.9602676],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Terrace Cafe',
        description:
          'MoMA terrace cafe is definitely one of my faves in the city buttt you need a ticket for the museum if you would like to go, or hold a MoMA membership card.',
        kind: 'Cafe',
        area: 'Midtown, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7615396, -73.9771471],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Rosecrans',
        description: '22 Mbps',
        kind: 'Cafe',
        area: 'greenwich, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7342129, -73.9998476],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Casa Barista & Co.',
        description:
          'The first coffee shop outside of a mall that I have ever visited in the Dominican Republic. All their roast and beans are source from the Dominican Republic. Go visit them if you are in the DR.',
        kind: 'Cafe',
        area: 'Piantini, Santo Domingo, DR',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4700987, -69.9323464],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Prince Coffee House',
        description:
          'Cool coffee shop in the bronx, close to the Zoo, the New York Botanic Garden, and Forham University.',
        kind: 'Cafe',
        area: 'Forham, Bronx',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8536135, -73.8890274],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Black Brick Coffee',
        description:
          'Their refreshments beverages are on a whole nother level.',
        kind: 'Cafe',
        area: 'Williamsburg, Brooklyn',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7141914, -73.9616546],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Devoción',
        description:
          'Devoción coffee is my go to. Their beans are from Colombia, their roast is nice, full of flavor coffee, and it feels like their barista always know what to do. Unlike dare i say STARBUCKS!!',
        kind: 'Cafe',
        area: 'Flatiron, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7160576, -73.9646899],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Devoción - Williamsburg',
        description:
          'Devoción coffee is my go to. Their beans are from Colombia, their roast is nice, full of flavor coffee, and it feels like their barista always know what to do. Unlike dare i say STARBUCKS!!',
        kind: 'Cafe',
        area: 'Williamsburg, Brooklyn',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.739111, -73.989113],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'SEY COFFEE',
        description:
          'Cool cafe in bushwick, Brooklyn. Great coffee, and cool atmosphere.',
        kind: 'Cafe',
        area: 'Bushwick, Brooklyn',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7053167, -73.9324176],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'La Cabra',
        description:
          'They have the best coffee in the entire New York Metro to this day! They open in April 2022 and came from Amsterdam which is cool to know. One of the managers was brought here to NYC from their Amsterdam shop too. That is your cool fact of the day. Try their pastries they are delish!',
        kind: 'Cafe',
        area: 'East Village, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7294459, -73.9868353],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Paper Coffee',
        description:
          'Cafe inside a hotel. Cool spot to chill, grab a cup of coffee with a friend and talk. ',
        kind: 'Cafe',
        area: 'Midtown, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7462091, -73.9895129],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Double Dutch Espresso',
        description: 'Cool cafe in harlem with a cute little garden.',
        kind: 'Cafe',
        area: 'Harlem, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8058557, -73.954049],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Cold Spring Coffeehouse',
        description: 'I have not been here yet. I want to go tho.',
        kind: 'Cafe',
        area: 'Cold Spring, NY',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.4182976, -73.9579212],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Ludlow Coffee Supply',
        description: 'Cafe in Lower East Side. One of Many.',
        kind: 'Cafe',
        area: 'Lower East side, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7216825, -73.9873972],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Coffee Project New York | East Village',
        description: 'I have not been here yet. I want to go tho.',
        kind: 'Cafe',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7270884, -73.989382],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Kobrick Coffee Co.',
        description: 'nice cafe in meatpacking district.',
        kind: 'Cafe',
        area: 'Meatpacking District, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7403556, -74.0055767],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Copper Mug Coffee',
        description:
          'Cool cafe in Williamsburg, Brooklyn with access to a huge garden!',
        kind: 'Cafe',
        area: 'Williamsburg, Brooklyn',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7165423, -73.9597969],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Black Fox Coffee',
        description: 'coffee shop in the Financial District.',
        kind: 'Cafe',
        area: 'FiDi, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7065047, -74.0077715],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'PlantShed Cafe at Prince Street',
        description: 'Another cafe with a flower shop but this one is in SoHo.',
        kind: 'Cafe',
        area: 'SoHo, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7225418, -73.9934464],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Maman',
        description:
          'My favorite Mamam out of them all is this one in SoHo. It has a beautiful garden that you can sit, eat, talk, work, and among other things.',
        kind: 'Cafe',
        area: 'SoHo, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7202877, -73.9983933],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Kona Coffee | East Village',
        description:
          'Hawaiian coffee shop in the east village that source their coffee from... you guess it Hawaii.',
        kind: 'Cafe',
        area: 'East Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7258692, -73.9898686],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'honestea',
        description: 'Good Drinks, Great presentations.',
        kind: 'Bubble Tea',
        area: 'Chinatown, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7178733, -73.9968715],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Xing Fu Tang Flushing Main St',
        description:
          'Best Bubble tea in NYC hands down. They also opened a new shop in the East Village in case you don`t want to go on a trip to flushing, Queens lol.',
        kind: 'Bubble Tea',
        area: 'Flushing, Queens',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7582153, -73.8296787],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Yaya Tea GRAND',
        description:
          'Okay bubble tea, pretty refreshing drinks. They have good food too. Been there many time and will continue to go there!',
        kind: 'Bubble Tea',
        area: 'Chinatown, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7191263, -73.9963099],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'MiuMiu Tea',
        description: 'I have not been here yet.',
        kind: 'Bubble Tea',
        area: 'Naco, Santo Domingo',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4733961, -69.9343592],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: '787 Coffee',
        description:
          'Awesome coffee shop that serves Puerto Rican coffee beans, and they have cafes all over the city.',
        kind: 'Cafe',
        area: 'FiDi, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7034852, -74.0108313],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'FREEHOLD',
        description: 'Restaurant / Cafe / Cool place to hang. ',
        kind: 'Cafe',
        area: 'Williamsburg, Brooklyn',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7137744, -73.9658268],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Puerh Brooklyn teashop',
        description:
          'The only cafe that sells mate in New York City. and it had to be in Williamburg, Brooklyn.',
        kind: 'Cafe',
        area: 'Williamsburg, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7143355, -73.9611974],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Café Lyria',
        description:
          'Great and awesome coffee shop. their decor is inspiring and the main barista is cool, nice and really engaging.',
        kind: 'cafe',
        area: 'NoHo, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.725846, -73.995426],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Boris & Horton',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7292874, -73.9814563],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Poetica Coffee',
        description:
          'Awesome looking coffee shop with cool garden, cool color scheme. Would reccomend if you are in the park slope area of brooklyn.',
        kind: 'Cafe',
        area: 'Park Slope, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6594561, -73.9814648],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Invigatorium',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'San Diego, CA',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [32.7118579, -117.1563494],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Little One',
        description:
          'I have not been to this japanese coffee and tea shop yet.',
        kind: 'Cafe',
        area: 'Dimes Square, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7141008, -73.9909993],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Warkop NYC',
        description: 'I have not been here yet.',
        kind: 'cafe',
        area: 'Hells Kitchen, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7643836, -73.9876243],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Remi48 Flower & Coffee',
        description:
          'Coffee shops with a flower shop inside are now trendy in NYC. This coffee one block away from the United Nations is a beautiful cafe.',
        kind: 'Cafe',
        area: 'Murray Hill',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7523663, -73.9723553],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Sawada Coffee',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'Tribeca, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7181659, -74.001889],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'High Tea at The PARISIAN TEA ROOM NYC',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'Midtown south, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7529677, -73.9980932],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'MUD SPOT aka MUD',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7291106, -73.9888276],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'OpenSpace',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'Medillin, Colombia',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [6.213546, -75.5710456],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Cafe Select',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'SoHo, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7217849, -73.9978025],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'C&B',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7251413, -73.9816557],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Sip & Co.',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'Midtown, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7647538, -73.9758633],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Lenox Coffee Roaster',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'Central Harlem, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.810034, -73.943292],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Common Good Harlem',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'Hamilton Heights, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8254303, -73.9404538],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Hutch and Waldo',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'Upper East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.774862, -73.9542673],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'The Hideout Chai Bar',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'Lower East Side',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7210707, -73.9909791],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Nocciola Coffee Bar And Bakery Arroyo Hondo',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'Arroyo Hondo, Santo Domingo',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4933251, -69.937488],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Gotan',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'Tribeca, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7192553, -74.0066082],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Mamam',
        description:
          'awesome Mamam location, They front area is a cute bookshop and the back half is the cafe and/or restaurant which is cool!.',
        kind: 'Cafe',
        area: 'Tribeca, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7189277, -74.0061392],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'SUITED',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'FiDi, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7093261, -74.0078426],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Birch Coffee',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'FiDi, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7109333, -74.0060101],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Oslo Coffee Roasters',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'Williamsburg, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7131786, -73.9623787],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'The Granddaddy',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'Lower East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7177667, -73.9920389],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Sweet Bloom Coffee Roasters',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'Denver, Colorado',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [39.7423987, -105.0746389],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: '',
        description: '',
        kind: '',
        area: '',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: '',
        description: '',
        kind: '',
        area: '',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [],
      },
    },
  ],
};

export default cafes;
