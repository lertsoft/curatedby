// All the data has been collected by Ronny Coste throughout the years.
/// ////////////////////////////////////////////////
/// ///////           Cafes         ////////////////
/// ////////////////////////////////////////////////

const cafes = {
  type: 'FeatureCollection',
  features: [
    /// ////////////////////////////////////////////////
    /// ///////         MANHATTAN        ////////////////
    /// ////////////////////////////////////////////////
    {
      type: 'Feature',
      properties: {
        name: 'noa, a café',
        description:
          'Small, and cute coffee with okay coffee and a great photo wall. The croissant and coffee are just okay not bad better than the benchmark of Starbucks which I guess is not hard to beat but not the best or close to it.s',
        kind: 'Cafe',
        area: 'Midtown, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7460497, -73.9833716],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Intelligentsia Coffee Highline Coffeebar',
        description:
          'Beautiful cafe with really good coffee... perhaps the blend is just different to what I am used to as I can taste maybe Colombian, Ethiopia and maybe Brazilian beams in the mix... I tried the Intelligentsia cold brew worth it!.',
        kind: 'Cafe',
        area: 'Chelsea, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7458931, -74.0052533],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Urbana Cafe and Gallery',
        description:
          'Coffee is sourced by Devocion so you better expect that the coffee is at least decent! It was better than decent, coffee was sweet, fruity, and passed the test for me but again that is expected from a devocion source. The gallery park of the cafe is interesting, pretty small and it honestly just is paintings hanging in which case I guess my room is a gallery too.',
        kind: 'Cafe',
        area: 'Chelsea, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7450009, -74.0058584],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Sorella Coffee & Wine',
        description:
          'Coffee is okay. The shop is really small but they have a wine happy hour from 4 to 7? I guess that is unique.',
        kind: 'Cafe',
        area: 'Grammercy, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7416975, -73.9819061],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Café-Flor',
        description:
          'Third time is the charm... So the cafe part of the shop was closed but the juice bar part was open so I got an Acai bowl instead that was really good so at least that is a great positive going for this place. I have been wanting to come here for a while so now at least I can cross and come back another time or maybe I should just find some other place...',
        kind: 'Cafe',
        area: 'Chelsea, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7440903, -73.9991976],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Voyager Espresso',
        description:
          'I have not been here yet. A somewhat hidden coffee shop that I would love to try!',
        kind: 'Cafe',
        area: 'FiDi, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7086604, -74.0069969],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Postcrypt Coffeehouse',
        description:
          'I have not been here yet. Coffee shop hidden inside a church because, of course, it had to be this is new york city people go to coffee shops, not churches!',
        kind: 'Cafe',
        area: 'West Harlem, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8078297, -73.9610321],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Church of Sweden',
        description:
          'I have not been here yet. Coffee shop hidden inside a church because, of course, it had to be this is new york city people go to coffee shops, not churches!',
        kind: 'Cafe',
        area: 'Midtown, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7571927, -73.9773861],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Norwegian Seamen`s Church in New York',
        description:
          'I have not been here yet. Coffee shop hidden inside a church because, of course, it had to be this is new york city people go to coffee shops, not churches!',
        kind: 'Cafe',
        area: 'Midtown, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7558724, -73.9666346],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Peaky Barista',
        description:
          'I tried a coffee which was good but it was not my style of coffee so I ended up throwing most of it... should have gotten my usual. the decor is cool it is based on the show "Peaky Blinders" which is based in Manchester, UK in the early 1900s after the first world war.',
        kind: 'cafe',
        area: 'Upper East Side, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7773389, -73.9573862],
      },
    },
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
        name: 'Sant Ambroeus',
        description:
          'Cool cafe inside Sotheby`s New York building. Cool place to grab a coffee, tea, or hot chocolate and then go to the three floors of galleries that Sotheby`s has in their building free for everyone to see!',
        kind: 'Cafe',
        area: 'Upper East Side, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7662678, -73.9538283],
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
          '** CLOSED :( ** This awesome coffee shop in SoHo will be remembered as A big coffee shop in SoHo, with a beautiful design on the inside, and that design reminds me of the look Wes Anderson has on his movies. Which always brings inspires me to go back.',
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
        name: 'Le Cafe Coffee',
        description:
          'Another cafe that is just like Blank Street, better than Starbucks but not the best just okay.',
        kind: 'Cafe',
        area: 'Hells Kitchen, New York',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7592982, -73.9960688],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'St Kilda Coffee',
        description:
          'Small coffee shop in Hells Kitchen, if you are not looking for it you might miss it as it is on a lower level/basement. The coffee is good no complaints.',
        kind: 'Cafe',
        area: 'Hells Kitchen, New York',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7589816, -73.990188],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'GRIND THE NYC COFFEE SHOP & BAGEL HOUSE',
        description:
          'Nice cafe with really good coffee. I did not expect it to be as good as it was as this place looks to be more of a diner, bodega food focus type of place. But I did like it and enjoyed it.',
        kind: 'Cafe',
        area: 'Hells Kitchen, New York',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7591032, -73.9917974],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Pennylane Coffee',
        description:
          'Coffee shop with a garage-style door that opens the entire space to the outside and brings the fresh air of summer to the cafe. Depending on the person that might be a good thing or a bad thing for me it is whatever it does not matter. I did not get coffee here but I got matcha and it was okay, nothing to complain about, nothing to be excited about. The wifi network tho sucks. I did not use it personally but my friend did and it was a nightmare lol',
        kind: 'Cafe',
        area: 'Midtown East, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7516215, -73.9702057],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Hex & Company (UES)',
        description:
          '1 out of 3 Gaming cafes, that I know of, this one is in Upper East Side. The coffee shop and Gaming cafe are awesome for meeting with friends or dates and playing games. The variety of games available here will overwhelm you haha',
        kind: 'Cafe',
        area: 'Upper East Side, Manhattan',
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
        name: 'Charlotte Cafe',
        description:
          'Okay, cafe with okay coffee. My cold brew tasted burn so yeah not great. Great place to work from tho plenty of sitting space with a limit of 90 minutes not enforced.',
        kind: 'Cafe',
        area: 'Upper West Side, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7941674, -73.97246],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Hawa Smoothies & Bubble Tea',
        description: 'Delish drinks and smoothies.',
        kind: 'Bubble tea store',
        area: 'Upper West Side, New York',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7861288, -73.9757943],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Hex & Company (UWS)',
        description:
          '1 out of 3 Gaming cafes, that I know of, This one is in Upper West Side by Columbia University. The coffee shop and Gaming cafe are awesome for meeting with friends or dates and playing games. The variety of games available here will overwhelm you haha',
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
          '1 out of 3 Gaming cafes, that I know of, this one is in Greenwich Village? Soho? Well under Washington Sq Park close to all the NYU buildings. The coffee shop and Gaming cafe are awesome for meeting with friends or dates and playing games. The variety of games available here will overwhelm you haha',
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
          'Coffee in midtown where the barista (Lorenzo and Jonathan) make some fire-ass coffee. Go visit them!! Also behind the coffee shop, there is a speakeasy after 5 pm.',
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
        name: 'Dimes',
        description:
          'I have not been here but Dimes Square is alive and well thank you!',
        kind: 'Cafe',
        area: 'Dimes Square, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7149398, -73.9915704],
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
        name: 'Terrace Cafe',
        description:
          'MoMA Terrace cafe is one of my faves in the city buttt you need a ticket for the museum if you would like to go or hold a MoMA membership card.',
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
        name: '11th Street Cafe',
        description:
          'This is a small and cozy coffee shop with some good food options! The Cafe Cubano sandwich is awesome! The Cold brew Coffee is sweet and not as strongly flavored. Probably Colombian beans as it is fruity and nutty. Not chocolaty or acidic. Would definitely come back again.',
        kind: 'Cafe',
        area: 'Greenwich, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7358128, -74.0075215],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Rosecrans',
        description:
          'This is my first flower shop and cafe, and loved it. The flower smell was unparalled.',
        kind: 'Cafe',
        area: 'Greenwich, Manhattan',
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
        name: 'Devoción',
        description:
          'Devoción coffee is my go-to. Their beans are from Colombia, their roast is nice, full of flavor coffee, and it feels like their barista always knows what to do. Unlike dare I say STARBUCKS!!',
        kind: 'Cafe',
        area: 'Flatiron, Manhattan',
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
        name: ':3Coffee | Flatiron',
        description:
          'Really small coffee shop. it was okay, average coffee better than starbucks but startbuck is the base and the average new york cafe is better than sstarbucks.',
        kind: 'Cafe',
        area: 'Flatiron, New York',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7410955, -73.9919942],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Luz Cafe',
        description:
          'New coffee shop in tha block... but this one has a backyard!',
        kind: 'Cafe',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7274616, -73.9845929],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Sammy L Coffee',
        description:
          'There seems to be a new coffee shop in town! Their coffee is good, and they carry a lot of food too. It feels more like a little market than a coffee shop which has its downsides but this is okay. I would come back. A great place to get some snacks or breakfast that is not just a plain croissant.',
        kind: 'Cafe',
        area: 'East Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7316986, -73.9880435],
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
          'Cafe inside a hotel. Cool spot to chill, grab a cup of coffee with a friend, and talk. ',
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
        description: 'Cool cafe in Harlem with a cute little garden.',
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
        name: 'Ludlow Coffee Supply',
        description: 'Cafe in Lower East Side. One of Many.',
        kind: 'Cafe',
        area: 'Lower East Side, Manhattan',
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
        description: 'Nice cafe in the meatpacking district.',
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
        name: 'Black Fox Coffee',
        description: 'Coffee shop in the Financial District.',
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
        name: 'Yaya Tea GRAND',
        description:
          'Okay, bubble tea, pretty refreshing drinks. They have good food too. Been there many times and will continue to go there!',
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
        name: 'Café Lyria',
        description:
          'Great and awesome coffee shop. their decor is inspiring and the main barista is cool, nice, and engaging.',
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
        name: 'The Little One',
        description:
          'I got their Hojicha Tiramisu and Hojicha Lemonade. Their tiramisu was soooo good!! The lemonade I was not a fan of the Hojicha gave it a taste that I did not love, but I will absolutely come back to this place and you should go too!',
        kind: 'Cafe',
        area: 'Dimes Square, Manhattan',
        visits: '1',
        visited: true,
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
        area: 'Murray Hill, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7536896, -73.9690676],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Sawada Coffee',
        description:
          'Cozy coffee shop inside AU Cheval restaurant, their coffee is good, no complains there.',
        kind: 'Cafe',
        area: 'Tribeca, Manhattan',
        visits: '1',
        visited: true,
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
        area: 'Midtown South, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7544385, -73.9943715],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'MUD SPOT aka MUD',
        description:
          'This coffee shop is pretty good! But it feels more like a restaurant or brunch spot than anything else.',
        kind: 'Cafe',
        area: 'East Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7290702, -73.9867314],
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
        description: 'Small bakery/cafe with great bread and okay coffee.',
        kind: 'Cafe',
        area: 'East Village, Manhattan',
        visits: '2',
        visited: true,
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
        description:
          'Great coffee in midtown... A first for me. On a see of Starbucks, and Dunkin Donuts this will save you all.',
        kind: 'Cafe',
        area: 'Midtown, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7647538, -73.9758633],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Coppa Nomad',
        description:
          'Okay, coffee but go there for the vibes honestly. Vibes first, then coffee.',
        kind: 'Cafe',
        area: 'Flatiron, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7436235, -73.9864955],
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
        name: 'semicolon cafe',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'Hamilton Heights, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8346024, -73.9452714],
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
        name: 'Café Blériot XI',
        description:
          'Really small coffee shop in UES, really charming and cute. Coffee is okay nothing crazy but you would go for the vibes of a coffee shop trap in the 1900s in this modern era full of minimalist-ism, and modernist designs aesthetics.',
        kind: 'Cafe',
        area: 'Upper East Side, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.776234, -73.9543691],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Hutch and Waldo',
        description:
          'Cool Aussie cafe in the Upper East Side. During the summer this coffee shop is a vibe of the tropics during the winter is a glorified takeout window pretty much.',
        kind: 'Cafe',
        area: 'Upper East Side, Manhattan',
        visits: '1',
        visited: true,
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
        area: 'Lower East Side, Manhattan',
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
        name: 'Gotan',
        description:
          'Cafe? Bar? Live Music Venue? Restaurant? this place kind of has it all.',
        kind: 'Cafe',
        area: 'Tribeca, Manhattan',
        visits: '1',
        visited: true,
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
          'awesome Mamam location, The front area is a cute bookshop and the back half is the cafe and/or restaurant which is cool!.',
        kind: 'Cafe',
        area: 'Tribeca, Manhattan',
        visits: '1',
        visited: true,
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
        name: 'The Granddaddy',
        description: 'Cool cafe in the Lower East Side.',
        kind: 'Cafe',
        area: 'Lower East Side, Manhattan',
        visits: '2',
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
        name: 'PlantShed',
        description:
          '2 Floors Cafe & flower shop for the peeps that are not allergic to pollen!',
        kind: 'Cafe',
        area: 'Soho, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7219019, -73.9977759],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Little Collins',
        description:
          'Great cafe with great coffee and good food! It is an Australian-inspired cafe and I think they have stores in Australia but do not quote me on that.',
        kind: 'Cafe',
        area: 'Midtown, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7523854, -73.9735836],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'semicolon cafe',
        description:
          'Really cool cafe, the coffee was okay. Cold brew was watered down not from my ice but it just was that way. Maybe I was unlucky and I need to try going again to try the coffee but for now, the coffee review is on hold as it was really hard for me to tell the coffee taste as it was watered down. They have plenty of space for sitting down and chilling.',
        kind: 'Cafe',
        area: 'Midtown, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7461837, -73.978067],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Ariston Coffee Bar',
        description:
          'Really cool cafe with a lot of space for working and sitting to with plenty of plans to breathe some somewhat fresh air in the middle of this concrete jungle.',
        kind: 'Cafe',
        area: 'Chelsea, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7357229, -73.9940437],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Cafe by the Girls Colombian Coffee',
        description:
          'Really nice cafe with bangers sandwiches! I enjoyed my chicken sandwich and also enjoyed my cold brew while there. Coffee beans are from colombia which... made sense because of their name.',
        kind: 'Cafe',
        area: 'Chelsea, New York',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.748558, -74.0055776],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Kilogram Cafe',
        description:
          'Nice and cool looking coffee shop. Coffee was above average to me. I forgat where the beans where from tho. Would definetely go there again.',
        kind: 'Cafe',
        area: 'Chelsea, New York',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7484205, -73.9937306],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Miss Du`s Tea Shop',
        description: 'Good bubble tea but I think there are better ones.',
        kind: 'Bubble Tea',
        area: 'Chinatown, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7148516, -73.998695],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Silk Road Cafe',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'Chinatown, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7146928, -73.9987589],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Merriweather Coffee + Kitchen',
        description:
          'Good coffee, and okay croissant... Would I go again? well, maybe to try something from their food menu but there are better cafes not that far from here.',
        kind: 'Cafe',
        area: 'Greenwich Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7305602, -74.0065341],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Do Not Feed Alligators',
        description:
          'Great coffee shop in Greenwich Village. A place to visit for those that love coffee.',
        kind: 'Cafe',
        area: 'Greenwich Village, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7336684, -74.0042842],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Café Kitsuné West Village',
        description: 'Cool cafe, decent coffee. A place to go read and chill.',
        kind: 'Cafe',
        area: 'Greenwich Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7350652, -74.0057837],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Now or Never Coffee',
        description: 'This coffee is pretty cool.',
        kind: 'Cafe',
        area: 'SoHo, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.722937, -74.004518],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Lost Draft',
        description:
          'Cool cafe, really trendy and ready for Tiktok if that is your Jam as they have plenty of shitty coffee mixes that I stupidly tried... Need to go again to try my go-to "Cold brew with milk on the side" and see if the coffee is actually good or this is just a tourist, social media trap.',
        kind: 'Cafe',
        area: 'SoHo, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7208219, -73.997315],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Teavva 茶花女',
        description:
          'This place glowing diva drink is sooooo good!! OMG - I LOVE IT!',
        kind: 'Bubble Tea',
        area: 'LES, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7213695, -73.9879724],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Doughnut Project',
        description: 'Really, Really GOOD donuts!!!',
        kind: 'Donut shop',
        area: 'Greenwich Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7312377, -74.0036592],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Taiyaki NYC',
        description:
          'Their fluffy pancakes are sooo good! This is a must-try for sure!.',
        kind: 'Japanese ice cream shop',
        area: 'Chinatown, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7179788, -73.9989213],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Hungry Ghost Coffee',
        description:
          'Nice cafe with a pretty good matcha latte! It is worth it to come back here and try their coffee.',
        kind: 'Cafe',
        area: 'Greenwich Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7328627, -74.0037843],
      },
    },

    /// ////////////////////////////////////////////////
    /// ///////         Brooklyn         ////////////////
    /// ////////////////////////////////////////////////
    {
      type: 'Feature',
      properties: {
        name: '% Arabica',
        description:
          'This coffee shop coffee is a must-try if you are a coffee aficionado like I am! Their beans are from the middle east mostly hence the name. But their blend of arabica coffee with Colombian and Brazilian coffee is really good!',
        kind: 'Cafe',
        area: 'Dumbo, Brooklyn',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7026, -73.994165],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Black Star Bakery & Cafe',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'Williamsburg, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7172871, -73.9564514],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Designers collab coffee',
        description:
          'I have never heard of this place before but now that I do know of its existence I am excited to go again. It is a beautiful shop that looks like a furniture store ( Maybe because it is! ). Their rose refresher is really good and tastes amazing and it does its job which is refreshing you on those hot summer days.',
        kind: 'Cafe',
        area: 'Williamsburg, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7176644, -73.9607098],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Qahwah House',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'Williamsburg, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7185888, -73.9572219],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'KIJITORA',
        description:
          'Try their Iced Matcha Latte, and/or the Tiramisu Chai Latte Those two are "chef kiss" of the best I have had in New York City.',
        kind: 'Cafe',
        area: 'Williamsburg, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7172871, -73.9564514],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Little Choc Apothecary',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'Williamsburg, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7119047, -73.9571692],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Nook',
        description:
          'Awesome coffee shop big, with places to sit inside or out, good matcha lattes and it is just a comfy place. ',
        kind: 'Cafe',
        area: 'Bushwick, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.705189, -73.924549],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Artshack Cafe/ Bar',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'Bed-Stuy, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6848879, -73.9539919],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Choice Market',
        description:
          'Fire ass breakfast food in the coffee shop in Clinton Hill.',
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
        name: 'Pasa Pasa',
        description:
          'I have not been here yet but walking by seems like it is a cool spot.',
        kind: 'Cafe',
        area: 'Crown Heights, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6630811, -73.9540336],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'PLG Coffee House and Tavern',
        description:
          'I have not been here yet but walking by seems like it is a cool spot.',
        kind: 'Cafe',
        area: 'Crown Heights, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6600465, -73.9532771],
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
        name: 'Devoción - Williamsburg',
        description:
          'Devoción coffee is my go-to. Their beans are from Colombia, their roast is nice, full of flavor coffee, and it feels like their barista always knows what to do. Unlike dare I say STARBUCKS!!',
        kind: 'Cafe',
        area: 'Williamsburg, Brooklyn',
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
        name: 'SEY COFFEE',
        description:
          'Cool cafe in Bushwick, Brooklyn. Great coffee, and cool atmosphere.',
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
        name: 'Poetica Coffee',
        description:
          'Awesome looking coffee shop with cool garden, cool color scheme. Would recommend it if you are in the park slope area of Brooklyn.',
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
        name: 'Bakeri',
        description:
          'Really cute cafe/bakery in Greenpoint. It kind of looks like something that could be in a Wes Anderson movie. Their croissants are really good! ',
        kind: 'Cafe',
        area: 'Williamsburg, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7343266, -73.9575636],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Poetica Coffee',
        description:
          'Small but cute looking coffee shop with a cool color scheme. Coffee is not the greatest the roast is a little bit burn?? Maybe I should try the cold brews and not a latte, the croissants are great tho.',
        kind: 'Cafe',
        area: 'Greenpoint, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7246486, -73.9476535],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Pueblo Querido',
        description:
          'The coffee in this shop is really good but no wonder their beans are sourced from Colombia roasted in-house! Coffee is great if you enjoy Colombian coffee beans and pastries are good too! Also, a lot of machinery to look at in the store which is cool because I say so.',
        kind: 'Cafe',
        area: 'Greenpoint, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7252995, -73.9515662],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'For The Record',
        description:
          'I have not been here yet but this is a cool looking spot, coffee plus vynils only in Greenpoint.',
        kind: 'Cafe',
        area: 'Greenpoint, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7362991, -73.955498],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Sweetleaf Coffee Roasters',
        description:
          'I have not been here yet but this is a cool-looking spot.',
        kind: 'Cafe',
        area: 'Greenpoint, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7345132, -73.9555278],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Le Paris Dakar',
        description:
          'I have not been here yet but it seems to have really good pastries.',
        kind: 'Cafe',
        area: 'Greenpoint, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7345132, -73.9555278],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Botbar Coffee',
        description:
          'The most gimmicky or perhaps futuristic cafe in the city... The barista is a Robot! Hopefully, the coffee beans are decent because...',
        kind: 'Cafe',
        area: 'Williamsburg, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7246906, -73.9512152],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'FREEHOLD',
        description: 'Restaurant / Cafe / Cool place to hang.',
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
        name: 'Oslo Coffee Roasters',
        description: 'Small but good coffee shop.',
        kind: 'Cafe',
        area: 'Williamsburg, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7131786, -73.9623787],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Textbook',
        description:
          'Cool looking coffee shop in fort greene! With good coffee and better burgers! Their chicken sandwich is a must-try, and their fries are *Chef Kiss*.',
        kind: 'Cafe',
        area: 'Fort Greene, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.689677, -73.9778429],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Cafe Calaca',
        description:
          'Nice Coffee shop with a cute and nice garden! Their coffee is good as I am used to for New York City and they have some nice bites and snacks like interested tasting empanadas... interesting because I have never had empanadas like those and I grew up eating empanadas lol. Would definitely come back if I am in the area.',
        kind: 'Cafe',
        area: 'Bed-stuy, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6814705, -73.9555832],
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
        name: 'The Black Flamingo',
        description:
          'I have not been here yet but a friend told me that this coffee shop is good and they even have a bar/club on Friday nights.',
        kind: 'Cafe',
        area: 'Williamsburg, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6790859, -74.0106547],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'For All Things Good Williamsburg',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'Williamsburg, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7127067, -73.9570094],
      },
    },

    /// ////////////////////////////////////////////////
    /// /////////         Queens       ////////////////
    /// ////////////////////////////////////////////////
    {
      type: 'Feature',
      properties: {
        name: 'Château le Woof',
        description:
          'This cafe is awesome!! you can look at puppies while drinking your coffee and/or work! what else do you need in life?',
        kind: 'Cafe',
        area: 'Astoria, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7690251, -73.9355708],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'MOKA & CO',
        description:
          'Yemini coffee shop in Astoria, Queens. Their blends, coffee, and Tea specialties are fairly interesting for someone who has never had traditional yemeni coffee. All their specielty coffee have cardamom which I learn it was not for me... Their shai Tea with Cardamom tho was a lot better for my taste. I am used to drinking south american beans (Brazilian, Costa rica and colombians) which are sweeter so maybe thats why the spiced up coffee was a bit much. The strawberry croissant is delish! TRY IT out. I am glad I try the coffee traditional specialty as it is fairly different and new to me, I would definetely go back and try a more traditional / regular coffee to actually taste the beans and find out the flavors of thee yemeni beans as I could not tell the coffee notes from this first experience. Loved the place the staff is really friendly and I would recommend going there and sitting down and enjoy the drink there as that would ensure you are getting the drinks as they are intended to be drank.',
        kind: 'Cafe',
        area: 'Astoria, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.764340086066596, -73.91485254876854],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'OK Cafe',
        description:
          'Their sandwiches are delish! I tried the croissant baked ham and cheese and it was really good. The green tea lemonade is also good and the chai latte too. Honestly a cool spot to get going, or maybe chill this place can do both.',
        kind: 'Cafe',
        area: 'Astoria, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.775285356609785, -73.90990893713001],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Sunshine Cafe',
        description:
          'Really interesting cafe with a huge menu collection of drinks it includes boba, smoothies, juices, coffee, tea and delicious fresh Portokalopita. The smoothies and freshly squeezed juices are good.',
        kind: 'Cafe',
        area: 'Astoria, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.78077532069499, -73.9167879034015],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Tap - Brazilian Cafe',
        description:
          'Awesome cafe with brazilean beans, brazilean appetizers and treats. Everything 100% gluten-free. Honestly all of it was good in my opinion, and my girlfriend agrees with that assestment. Any of their sandwiches in the mini-panini form those are **Chef Kiss**. For coffee just be mindful that brazilean beans are sweeter than arabica or asian beans in case you love the sourness or acidity of them. Other than that this place was really good ten out of ten.',
        kind: 'Cafe',
        area: 'Astoria, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7752525805115, -73.90920996360293],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Oasis Cafe',
        description:
          'Really good croissants and refreshments drinks. Their regular tea and coconut milk-based drinks were really good! Me and my girlfriend enjoyed it a lot both drinks.',
        kind: 'Bakery',
        area: 'Astoria, New York',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7647484, -73.923534],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Kua Bori Coffee Lounge',
        description: 'Cool looking cafe but I have not been here yet.',
        kind: 'Cafe',
        area: 'Astoria, Queens',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7680766, -73.9357487],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Under Pressure',
        description:
          'The coffee is really good, and they have a good coffee blend plus a bunch of Greek fusion of things which I liked.',
        kind: 'Cafe',
        area: 'Astoria, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7645958, -73.9236104],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Xing Fu Tang Flushing Main St',
        description:
          'Best Bubble tea in NYC hands down. They also opened a new shop in the East Village in case you don`t want to go on a trip to Flushing, Queens lol.',
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
        name: 'Spot Dessert Bar',
        description:
          'good desserts but I don`t know if I would go again just because i do not like and consume that much sugar really.',
        kind: 'Dessert Bar',
        area: 'Flushing, New York',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7590908, -73.8323257],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Gossip Coffee',
        description:
          'Cool Greek coffee shop in Astoria. Coffee is strong and the spot is cool to hang or do some work sesh.',
        kind: 'Cafe',
        area: 'Astoria, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7644306, -73.9165278],
      },
    },
    /// ////////////////////////////////////////////////
    /// //////       Dominican Republic       //////////
    /// ////////////////////////////////////////////////
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
        name: 'Cafecito Del Parque',
        description:
          'A cute little coffee shop in the middle of the park with a small library on its side and plenty of outdoor sitting. Getting some juice from here, sit, and relax. Coffee is not their forte as it is instant coffee. ',
        kind: 'Cafe',
        area: 'La Esperilla, Santo Domingo',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4672405, -69.919433],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'MiuMiu Tea',
        description:
          'If you need a fix of bubble tea in the dominican republic this will do. Not great but it`s gotta do. They also serve a lot of food.',
        kind: 'Bubble Tea',
        area: 'Naco, Santo Domingo',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4733961, -69.9343592],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Casa Barista & Co.',
        description:
          'The best coffee shop in the Dominican Republic where you can get really good coffee. This is probably the first coffee shop outside of a mall too that I have ever visited in the Dominican Republic. All their roast and beans are sourced from the Dominican Republic, and their coffee is really good, they have a variety from different regions of the Dominican Republic with different roasts. Go visit them if you are in the DR.',
        kind: 'Cafe',
        area: 'Piantini, Santo Domingo, DR',
        visits: '2',
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
        name: 'Cafe SBG',
        description:
          'Okayish cafe/restaurant inside Blue Mall, because it is inside the mall so if you are going shopping you could do that and then sit and get some coffee. ',
        kind: 'Cafe',
        area: 'Piantini, Dominican Republic',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4726823, -69.9409382],
      },
    },
    /// ////////////////////////////////////////////////
    /// ///////         United States      /////////////
    /// ////////////////////////////////////////////////

    {
      type: 'Feature',
      properties: {
        name: 'Hidden Grounds Coffee',
        description:
          'The New Orleans iced coffee and the lavender-infused iced coffee are really good! The might not be for the coffee purist but the mixture of taste was awesome and refreshing.',
        kind: 'Cafe',
        area: 'Hoboken, New Jersey',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7362506, -74.0299703],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Flitch Coffee',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'Austin, Texas',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [30.2577456, -97.7054476],
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
        name: 'Rincon Argentino',
        description:
          'Get your mate (mah-teh) while in cold spring, please!! Support the owner she is really sweet and nice.',
        kind: 'Cafe',
        area: 'Cold Spring, NY',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.4164992, -73.9601559],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Prince Coffee House',
        description:
          'Cool coffee shop in the Bronx, close to the Zoo, the New York Botanic Garden, and Fordham University.',
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
        name: 'Envie Espresso Bar & Cafe',
        description:
          'Good coffee and hot Chocolate. Nice spot to read and hear the city noises.',
        kind: 'Cafe',
        area: 'New Orleans, LA',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [29.9614434, -90.0587567],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Cafe Du Monde French Market',
        description:
          'Great hot chocolate and awesome beignets. This is a must-try in while in NOLA pretty touristy but pretty worth it.',
        kind: 'Cafe',
        area: 'New Orleans, LA',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [29.9576367, -90.0618279],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Cafe Beignet, Bourbon Street',
        description:
          'Maybe not as good beignets as Cafe Du Monde but you get live jazz music here which is just as good as the beignets but the coffee and drinks are just as good. Really enjoyed it here. Jazz music while sipping coffee.',
        kind: 'Cafe',
        area: 'New Orleans, LA',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [29.9557967, -90.0684354],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Revelator Coffee Company',
        description:
          'Great pour-over coffee! The flavors and texture of the coffee were of the best! I want to go back again! Also, the space aesthetic was a minimalist delight.',
        kind: 'Cafe',
        area: 'New Orleans, LA',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [29.9468172, -90.0675151],
      },
    },

    /// //////////////////////////////////////////////
    /// ///////////     Asia     /////////////////////
    /// //////////////////////////////////////////////

    /// //////////////////////////////////////////////
    /// ///////////     Europe     /////////////////////
    /// //////////////////////////////////////////////
    {
      type: 'Feature',
      properties: {
        name: 'Café Hawelka',
        description:
          'I have not been here yet but this coffee shop looks awesome!',
        kind: 'Cafe',
        area: 'Vienna, Austria',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [48.2079267, 16.3697049],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Café Marlette',
        description:
          'I have not been here yet but SouSou recommended me this place.',
        kind: 'Cafe',
        area: 'Paris, France',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [48.8801986, 2.3400846],
      },
    },
    /// //////////////////////////////////////////////
    /// ///////////     Americas     /////////////////////
    /// //////////////////////////////////////////////

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
        name: 'Crew Collective & Cafe',
        description: 'I have not been here yet.',
        kind: 'Cafe',
        area: 'Montréal, Canada',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [45.5023132, -73.5593176],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'A-OK CAFE',
        description:
          'Aritzia coffee shop. Interesting, cool, I am glad I visited it but probably not again unless it was on my way to someplace else.',
        kind: 'Cafe',
        area: 'Toronto, Canada',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [43.6702268, -79.3877266],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Piedmont Coffee Bar',
        description:
          'Really good cafe in Toronto. I think I tried their entire menu while i was there (Cold Brew, Capuccino, Latte, Mocha, and Matcha Latte) and honestly I enjoyed all of it, it was not the best coffee I have ever had but I enjoyed it.',
        kind: 'Cafe',
        area: 'Toronto, Canada',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [43.6683339, -79.3824232],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Church Street Espresso',
        description:
          'Nice and cozy coffee shop, I only visited once and it was a quick visit but I enjoyed it.',
        kind: 'Cafe',
        area: 'Toronto, Canada',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [43.6682443, -79.3818819],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Qūentin Café',
        description:
          'Awesome looking cafe in DF for whenever I visit Mexico but I have not been here yet :(',
        kind: 'Cafe',
        area: 'Mexico DF, Mexico',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [19.4184767, -99.1576753],
      },
    },
  ],
};

export default cafes;
