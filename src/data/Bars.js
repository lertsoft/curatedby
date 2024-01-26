// All the data has been collected by Ronny Coste throughout the years.
/// ////////////////////////////////////////////////
/// ///////           Bars          ////////////////
/// ////////////////////////////////////////////////

/**
 * Object containing a list of bars in Manhattan.
 * @typedef {Object} Bars
 * @property {string} type - The type of feature collection.
 * @property {Array} features - An array of bar features.
 */

const Bars = {
  type: 'FeatureCollection',
  features: [
    /// ////////////////////////////////////////////////
    /// ///////         MANHATTAN          ////////////////
    /// ////////////////////////////////////////////////
    {
      type: 'Feature',
      properties: {
        name: 'LOULOU',
        description:
          'So LouLou has a "speakeasy" they say in the basement of the restaurant but this place is really a club. It has tropical vibes and a trendy Coca-Cola door so that all the influencers enter this place with glamour. I was not a fan of it mostly because I felt ',
        kind: 'Club',
        area: 'Chelsea, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7426408, -74.0002172],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Anotheroom',
        description:
          'Small cute bar with a decent beer selection, and some nice cocktails. Would I go again? Probably if anything else is not the vibe. but the vibe is a small, intimate place that is also somewhat cheap.',
        kind: 'Bar',
        area: 'Tribeca, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7198796, -74.0056002],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Saint Tuesday',
        description:
          'This is an Awesome bar with live music, deep underneath the streets of Manhattan. The cocktails are good but not appetizers so go with a full tummy do not repeat my mistake.',
        kind: 'Speakeasy',
        area: 'Tribeca, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7182243, -74.0021302],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Analogue',
        description:
          'I have not been here yet but I have heard that it is a great bar.',
        kind: 'Cocktail Bar',
        area: 'NoHo, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7328781, -73.9974686],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Folly',
        description:
          'I did not know that this place had such a great Rum menu but it was great. I tried the "Wits End" which is done with Brugal Extra Viejo. It was really good, and amazing it even included a sugar cane for you to enjoy. That sugar was not that good but I mean this is New York City they are not fresh like they would be in the Dominican Republic. ',
        kind: 'Bar',
        area: 'NoHo, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7272085, -74.0000853],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Up & Up',
        description: 'I have not been here yet.',
        kind: 'Cocktail Bar',
        area: 'NoHo, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7296941, -74.0004701],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Jolene ',
        description:
          'This place is supposed to be an American Restaurant but I will classify it as a bar because the food menu is tiny and only available at some times during the night/day. For drinks, it was really good! The vibe and decor are nice and cool, and there are some outdoor tents, that is where we sat it was cozy and intimate. ',
        kind: 'Bar',
        area: 'NOHO, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7267242, -73.9922134],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Village Vanguard',
        description: 'I have not been here yet.',
        kind: 'Jazz Club',
        area: 'Greenwich Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7359736, -74.0016172],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Joyface',
        description:
          'Really cool bar known for their water bed but cool because of the atmosphere. This place I think encapsulate what the east village is all about. I would put Joyface on my top 10 spots really.',
        kind: 'Bar',
        area: 'East Village, New York',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7239149, -73.9788176],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Attaboy',
        description: 'I have not been here yet.',
        kind: 'Cocktail Bar',
        area: 'Lower East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.718882, -73.99138],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'AWOL Bar & Grill',
        description:
          'The Center stage karaoke and the decor is a 70`s lover paradise haha.',
        kind: 'Bar',
        area: 'Kips Bay, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7399938, -73.9821476],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Ivory Peacock',
        description:
          'The new bar in town. Now open in Flatiron District. This is supposed to be a bar that specializes in Gin and one of the servers told us that they are planning on having at least 1000 different Gin bottles... Now I do not know if there are that many Gins in the world but it would be awesome to go again another time when their menu is final to try some of those gins. For now, their drinks are good just what I would expect from a nice bar in New York, it did not become my fave but it is good enough that I would go again. ',
        kind: 'Cocktail Bar',
        area: 'Flatiron, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7443483, -73.9907586],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Pebble Bar',
        description:
          'Really nice atmosphere, Cool staff, small space ( If you care about that ), great drinks, not so great food options in case you do not like seafood. I love their framed photos and decor I will definitely go back. Also, it was founded by Nicholas Braun "Greg from Succession".',
        kind: 'Cocktail Bar',
        area: 'Midtown, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7592233, -73.9806715],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Ophelia Lounge NYC',
        description: 'I have not been here yet.',
        kind: 'Cocktail Bar',
        area: 'Murray Hill, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.753401, -73.9661736],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'SNS Bar',
        description:
          'Cool, cozy bar. This bar is part of the SNS store that is on 12hh.',
        kind: 'Bar',
        area: 'Meatpacking District, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7395936, -74.0073485],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'The Gutter L.E.S.',
        description: 'I have not been here yet.',
        kind: 'Bowling Alley',
        area: 'Lower East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7180136, -73.988778],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Pineapple Club',
        description: 'I have not been here yet.',
        kind: 'Cocktail Bar',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7253444, -73.9832095],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Haswell Green`s',
        description: 'I have not been here yet.',
        kind: 'Cocktail Bar',
        area: 'Midtown, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.762969, -73.98422],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Comedy Cellar',
        description: 'I have not been here yet.',
        kind: 'Comedy Club',
        area: 'NoHo, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7302002, -74.0005639],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Ray`s',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Lower East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.721182, -73.992504],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Bar Belly',
        description: 'I have not been here yet.',
        kind: 'Cocktail Bar',
        area: 'Dimes Square, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7151381, -73.9916374],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Bar Downstairs and Kitchen',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Midtown, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7528255, -73.9809613],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Santiago’s Beer Garden',
        description: 'I have not been here yet.',
        kind: 'Beer Garden',
        area: 'East Harlem, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7985181, -73.9338581],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'LPR',
        description: 'I have not been here yet.',
        kind: 'Live Music Venue',
        area: 'NoHo, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7285022, -74.0000425],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Cutting Room',
        description: 'I have not been here yet.',
        kind: 'Live Music',
        area: 'Murray Hill, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7459751, -73.9829183],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Flûte Champagne Bar',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Midtown, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7639353, -73.9819968],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Blond',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'SoHo, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7192169, -74.0001156],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Ear Inn',
        description:
          'I have not been here yet but this bar opened in 1817! It is one of the oldest places in the City.',
        kind: 'Bar',
        area: 'SoHo, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7258758, -74.0095352],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Good Behavior',
        description: 'I have not been here yet.',
        kind: 'Cocktail bar',
        area: 'Midtown, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7463212, -73.9895145],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Marie`s Crisis Café',
        description: 'I have not been here yet.',
        kind: 'Jazz Bar',
        area: 'Greenwich Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.733221, -74.0034023],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Butterfly Soho',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Tribeca, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7239696, -74.0031134],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Club Room at Soho Grand',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Tribeca, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7221457, -74.0046268],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Paul`s Cocktail Lounge',
        description: 'I have not been here yet.',
        kind: 'Cocktail Bar',
        area: 'Tribeca, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7193813, -74.0047809],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'McSorley’s Old Ale House (1854)',
        description:
          'I have not been here yet but this pub that opened in 1854 is standing inconspicuously at 15 E. 7th Street, it offers two drinks: McSorley’s Dark Ale and McSorley’s Light Ale. Despite the lack of variety, or perhaps because of it, the bar has thrived throughout the years, managing to keep fairly low prices. Collectibles line the walls, some of them there since 1910. Wishbones hang from above placed there by neighborhood boys who went to war and did not make it back.',
        kind: 'Pub',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7288116, -73.9897357],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Ten Degrees',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7269497, -73.98348],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: '310 Bowery Bar',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'NoHo, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.724951, -73.9926128],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Banzarbar',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Nolita, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7219843, -73.9924459],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Dizzy`s Club',
        description:
          'Favorite fucking jazz bar in the entire New York City! I used to go every Friday after my college classes to drink some whiskey while listening to some live jazz.',
        kind: 'Jazz Bar',
        area: 'Midtown, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7685594, -73.9830762],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Prohibition',
        description: 'I have not been here yet. I want to go tho.',
        kind: 'Jazz Bar',
        area: 'Upper West Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7852428, -73.972764],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Fat Cat (Cellar Dog)',
        description:
          'I have been here many, many times. I love it. Live jazz with pool tables, and many other games. Close to Stonewall in Greenwich Village.',
        kind: 'Jazz Bar',
        area: 'Greenwich, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7337, -74.0032],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Dante NYC',
        description:
          'After a long time of waiting to go there, I went with my friend that so highly rated this place and I gotta say... it is not bad, now I had a negroni bianco because negronis are what they are known for but I do not love negronis at all! So with that in mind it was good I enjoyed the Negroni it smelled delicious and tasted good. Would say it is definitely a must-try and I will probably try a different thing next time.',
        kind: 'Bar',
        area: 'NoHo, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7288417, -74.0016444],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'The Little Shop',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Two Bridges, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7083747, -74.0009552],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'La Noxe',
        description: 'I have not been here yet.',
        kind: 'Cocktail Bar',
        area: 'Flatiron, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7470276, -73.9930899],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Kind Regards',
        description:
          'Lovely bar with a basement ready for you to dance to techno until the sun comes out. In the heart of Lower East Side.',
        kind: 'Bar',
        area: 'Lower East Side, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7208262, -73.9878062],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'The Garret Coctelería',
        description:
          'I have been here a lot! Mostly because my friend has a DJ Gig with them. Go support Him, and the bartenders there every Friday. Cool Latin sounds every, and tropical drinks.',
        kind: 'Bar',
        area: 'Nolita, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7196608, -73.9950607],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Clandestino',
        description: 'Dimes Square Landmark',
        kind: 'Bar',
        area: 'Dimes Square, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7147533, -73.9907809],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Bowery Electric',
        description:
          'Cool bar / Venue with bands playing on the basement in your fave neighborhood the East Village.',
        kind: 'Bar',
        area: 'East Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7257471, -73.9917966],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Short Stories',
        description:
          'Small Bar in the village, there is almost always a bunch of peeps waiting to go in on a Friday night. That does not mean it is good, it is cool tho for what that`s worth.',
        kind: 'Bar',
        area: 'East Village, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7266592, -73.9913549],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'The Red Lion',
        description:
          'Bar for NYU Students they do not card all the time so that is the only positive... That only applies to kiddos from NYU and surroundings.',
        kind: 'Bar',
        area: 'East Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7284222, -73.9994518],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Late Late',
        description:
          'Cool bar if you are bar hopping, plenty of peeps, basement for dancing but be wary the basement lacks good ventilation so expect smells.',
        kind: 'Bar',
        area: 'Lower East Side, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7228549, -73.9891138],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'BUA',
        description:
          'Cool Bar in the East Village. Good drinks, Good atmosphere, Cool vibes.',
        kind: 'Bar',
        area: 'East Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7268537, -73.9838067],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Mr. Purple',
        description:
          'Cool rooftop bar in Lower East Side. I feel like everyone in Manhattan knows about this rooftop bar, I guess that means they are doing something right. During the summer they open their pool up until 10 pm if you are feeling dangerous.',
        kind: 'Rooftop Bar',
        area: 'Lower East Side, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.721741, -73.988103],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Panorama Room',
        description:
          'Cool rooftop bar in Roosevelt Island, cool views of mostly 59th St and the United Nations. Good drinks and cool vibes.',
        kind: 'Rooftop Bar',
        area: 'Roosevelt Island, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7562483, -73.9556897],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'PHD Terrace at Dream Midtown',
        description:
          'ahh PHD... It is cool but not my cup of tea. View of midtown.',
        kind: 'Rooftop Bar',
        area: 'Midtown, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.764429, -73.9819377],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Dear Irving on Hudson Rooftop',
        description:
          'Cool rooftop bar in 34th St with Views of the Empire State, and Hudson Yards.',
        kind: 'Rooftop Bar',
        area: 'Midtown, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7561626, -73.991717],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Roof',
        description:
          'Another Lower East Rooftop bar this one is in the public hotel, it is more low key than Mr. Purple, more chill but has plenty of room.',
        kind: 'Rooftop Bar',
        area: 'Lower East Side, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7228758, -73.9918508],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'RH Rooftop Restaurant New York',
        description: 'I have not been here yet. I want to go tho.',
        kind: 'Rooftop Bar',
        area: 'Meatpacking District, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.73985, -74.00639],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Refinery Rooftop',
        description:
          'Rooftop bar in midtown with views of buildings in 39th St and 37th St... I went there once and probably will stay that way.',
        kind: 'Rooftop Bar',
        area: 'Midtown, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7522605, -73.985361],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Magic Hour Rooftop Bar & Lounge',
        description:
          'Instagram Worthy Rooftop in midtown, I guess if you want to go to take photos to go there... just know that everyone is going there for those reasons. Great view of the Empire State tho.',
        kind: 'Rooftop Bar',
        area: 'Midtown, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7524923, -73.9893157],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Haven Rooftop',
        description: 'I have not been here yet. I want to go tho.',
        kind: 'Rooftop Bar',
        area: 'Midtown, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7584867, -73.983223],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Garfunkel',
        description:
          'My favorite speakeasy in New York City, great drinks, Awesome atmosphere, Great bartenders. Awesome menu, full of surprises :)',
        kind: 'Speakeasy',
        area: 'Lower East Side, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7194293, -73.9851005],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Back Room',
        description: 'I have not been here yet. I want to go tho.',
        kind: 'Speakeasy',
        area: 'Lower East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7187626, -73.9870042],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Crif Dogs',
        description:
          'I have not been here yet. But I have had their hotdogs in the cover shop. Those are good!',
        kind: 'Speakeasy',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7270598, -73.9837997],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Garret',
        description:
          'I have not been here yet. But I have always wanted to go there because it is on top of a five-guys restaurant.',
        kind: 'Speakeasy',
        area: 'Greenwich Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7323715, -74.003783],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Basement',
        description:
          'I have not been here yet. But I have heard good things about this place!',
        kind: 'Speakeasy',
        area: 'Chinatown, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.715298, -73.9989571],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Garret East',
        description: 'I have not been here yet. I want to go tho.',
        kind: 'Speakeasy',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7294639, -73.980738],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'UES.',
        description:
          'Speakeasy behind an Ice Cream shop, cool drink presentation.',
        kind: 'Speakeasy',
        area: 'Upper East Side, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7795714, -73.9508399],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Cauldron',
        description:
          'Bar with drinks inspired by Harry Potter in the Financial District, don`t ask questions about the location.',
        kind: 'Bar',
        area: 'Financial District, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7044699, -74.010548],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Tavern 29',
        description: 'Been there once, and only once.',
        kind: 'Pub',
        area: 'Midtown East, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7442781, -73.9839841],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Jane Ballroom',
        description:
          'Cool venue, only been there once but that is because only one event that I have been interested in or invited was there.',
        kind: 'Live Music Venue',
        area: 'Meatpacking District, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7383247, -74.009293],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Skinny Bar and Lounge',
        description: 'Cool bar to bar hop to.',
        kind: 'Bar',
        area: 'Lower East Side, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.721541, -73.988186],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Mezzrow',
        description:
          'Awesome jazz provided in this small or should I say cozy bar in Greenwich Village.',
        kind: 'Jazz Bar',
        area: 'Greenwich Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7346, -74.001924],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: '55 Bar',
        description:
          'Another amazing jazz bar! Manhattan is the heart of jazz so yeah... makes sense.',
        kind: 'Jazz Bar',
        area: 'Greenwich Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7337903, -74.002266],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Tomi Jazz',
        description:
          'Amazing jazz bar with Japanese inspirations which means I loved it! Again Manhattan is the heart of jazz so yeah... so makes sense.',
        kind: 'Jazz Bar',
        area: 'Midtown East, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7571457, -73.9678294],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Iguana New York',
        description:
          'Mexican Restaurant that has a huge basement that hosts Latin music parties. I have been unlucky tho every time that I have visited it is pretty dead... maybe is because I show up at 10 pm and that is too early.',
        kind: 'Dance',
        area: 'Midtown, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7642491, -73.9832269],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: '230 Fifth Rooftop Bar',
        description: 'Nice rooftop bar with cool views.',
        kind: 'Rooftop Bar',
        area: 'Grammercy, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.744002, -73.9880767],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Pete’s Tavern (1864)',
        description:
          'I have not been here yet but this pub also known as “the tavern that O. Henry made famous,” is a vestige of the Civil War era. The building itself dates back to 1829, though it was not operated as a bar until 1864. Its large signs claiming to be the oldest bar in the city have been greatly disputed by McSorley’s.',
        kind: 'Pub',
        area: 'Grammercy, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7365052, -73.9868097],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Old Town Bar (1892)',
        description:
          'I have not been here yet but this pub joined the Union Square neighborhood in 1882 as Viemeister’s. Like many of the other oldest bars in NYC, it survived Prohibition by becoming a speakeasy under the name Craig’s Restaurant. During this stage in the bar’s history, patrons could hide their alcohol in a compartment underneath their seats.',
        kind: 'Pub',
        area: 'Grammercy, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7375054, -73.9892421],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Karaoke Boho Orchard',
        description:
          'Karaoke bar in Chinatown which I think is the cheapest one in the entire city at 10 dollars per person.',
        kind: 'Karaoke Bar',
        area: 'Chinatown, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7207467, -73.9886926],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Dead Rabbit Manhattan',
        description:
          'Nice bar in FiDi, their drinks are good but I have only been here once... it is supposed to be a really popular bar for whatever that`s worth.',
        kind: 'Bar',
        area: 'Financial District, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7122656, -73.9515525],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Paris Café (1873)',
        description:
          'I have not been here yet but this bar was established in 1873 when the South Street Seaport was a working port, the Paris Café (https://www.pariscafenyc.com/) was originally part of Meyers Hotel and Bar across the street from the Fulton Fish Market. It was frequented by luminaries like Teddy Roosevelt, Thomas Edison, Butch Cassidy, and Lauren Bacall.',
        kind: 'Bar',
        area: 'Financial District, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7073069, -74.0016406],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: '169 Bar',
        description:
          'Dimes Square bar where you can find and interact with so many different personalities. Find creative peeps and peeps that will either make you night, or not, your year, or not. Maybe that only applies to my friends.',
        kind: 'Bar',
        area: 'Dimes Square, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7138889, -73.9897222],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Pilsener Haus & Biergarten',
        description: 'Beer Garden in Hoboken, great sausages, and pretzels.',
        kind: 'Beer Hall',
        area: 'Hoboken, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7551665, -74.0315654],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Death & Company',
        description:
          'Fancy bar of the village? Maybe this one is here because it has a nice vibe. ',
        kind: 'Bar',
        area: 'East Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.72592, -73.9846452],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Ace Bar',
        description:
          'Pool tables ready, Bartenders ready, nothing fancy, it just works.',
        kind: 'Bar',
        area: 'East Village, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7243881, -73.9828652],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Beauty Bar',
        description:
          'Salon and Bar mixed into one on 14th St. Want to do your hair and get drunk this might be your spot.',
        kind: 'Bar',
        area: 'East Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7329854, -73.985709],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Penrose',
        description:
          'Bar with good food, I think these two are only achievable on the Upper East Side.',
        kind: 'Bar',
        area: 'Upper East Side, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7754438, -73.9531426],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Jungle Bird',
        description:
          'I did not love this place the first time now I would say definitely check this place out it has a second floor and a first floor bars with separate entrances.',
        kind: 'Bar',
        area: 'Chelsea, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7426041, -74.0001774],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Ethyl`s Alcohol & Food',
        description: 'I have not been here yet.',
        kind: 'Jazz Bar',
        area: 'Upper East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7770712, -73.9527088],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Home Sweet Home',
        description:
          'Taxidermy? on a bar? If that is your kink this is your place in the lower east side.',
        kind: 'Bar',
        area: 'Lower East Side, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7194868, -73.9933538],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Bowery Ballroom',
        description: 'Concert and party venues.',
        kind: 'Venue',
        area: 'Lower East Side, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7204327, -73.9933927],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Rockwood Music Hall',
        description: 'I have not been here yet.',
        kind: 'Live Music Venue',
        area: 'Lower East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7223045, -73.9885815],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Cafe Wha?',
        description: 'I have not been here yet.',
        kind: 'Jazz Bar',
        area: 'Greenwich Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.730084, -74.0005579],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Jake`s Dilemma',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Upper West Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7843586, -73.9777082],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Dead Poet',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Upper West Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7850035, -73.9773822],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Sour Mouse',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Lower East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7189604, -73.9883548],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'BATSU!',
        description: 'I have not been here yet.',
        kind: 'Comedy Club',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7253512, -73.9872202],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Life Rooftop Central Park',
        description:
          'Rooftop with immaculate views of central park. Go to enjoy the views not for the drinks, as they are average not great, not bad just okay.',
        kind: 'Rooftop Bar',
        area: 'Midtown, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7645242, -73.9784575],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'The Woo Woo Manhattan',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Hells Kitchen, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7600765, -73.9872658],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Bluebird London NYC',
        description: '** CLOSED :( **',
        kind: 'Fine Dining',
        area: 'Midtown, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7679711, -73.9828777],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Spring Lounge',
        description:
          'I have not been here yet but have heard good things of this place in spring st.',
        kind: 'Bar',
        area: 'SoHo, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.721904, -73.996424],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Mulberry Street Bar (1908)',
        description:
          'I have not been here yet but this Little Italy haunt was established over a hundred years ago, as a small bar called Mare Chiaro. Its rich history as one of the oldest bars in NYC remains in its original subway tile floor, wooden bar, and pressed-tin ceiling. The bar stayed in the same family for a couple of generations, before being purchased in 2003 by current owner Ed Welsh. His updates have made the bar good for sports fans and karaoke lovers alike, but nothing beats the jukebox stocked with Connie Francis, Frank Sinatra, and Four Tops. It has been the site of many films, including Donnie Brasco, Men of Honor, and The Godfather Part III. They only take cash.',
        kind: 'Bar',
        area: 'Little Italy, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7202471, -73.9968467],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'The Headless Widow',
        description: 'I have not been here yet.',
        kind: 'Cocktail Bar',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7266088, -73.9863556],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'One and One',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.723274, -73.9881314],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Skin Contact',
        description: 'I have not been here yet.',
        kind: 'Wine Bar',
        area: 'Lower East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7176912, -73.9902341],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Temple Court',
        description:
          'This bar/restaurant is one of the coolest places I have visited in New York City. It is definitely a must-visit while in NYC. It is a bit pricey but the look, service, and flavors of the foods and drinks make it 1000% worth it. ',
        kind: 'Bar',
        area: 'FiDi, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.71126, -74.006822],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Bathtub Gin',
        description:
          'Okay, speakeasy behind a coffee shop. The drinks were okay butttt they bring out pole dancers and performers from time to time.',
        kind: 'Speakeasy',
        area: 'Chelsea, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7436536, -74.0031809],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Katana Kitten',
        description:
          'A friend of mine that is obsessed with ranking took me here because of this page https://www.worlds50bestbars.com/the-list/katana-kitten.html and to be honest, I do not know but I did not love it... It was okay but I have been to better bars. If you care about rankings this is number 9 of the world`s best bars so definitely try it out. Their food tho is quite tasty and good.',
        kind: 'Bar',
        area: 'Greenwich Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7342323, -74.0064007],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Employees Only',
        description:
          'This is supposed to be one of the 50 best bars in the world. This specifically is ranked 47 here https://www.worlds50bestbars.com/the-list/employees-only.html Their drinks are good, and the look and feel of the place are nice and cool. The bartenders are nice and explain the drinks to you if you ask. It is quite loud tho so be mindful of that. But I liked it, just do not get seasonal drinks if you would like to try their specialties. ',
        kind: 'Bar',
        area: 'Greenwich Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7334326, -74.0061625],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Thyme Bar',
        description:
          'I do not know if this place could count as a speakeasy as it is inside a bakery/cafe basement... with that out of the way the drinks and the presentation of those drinks is on another level. One of the best drinks I have had, and the best presentation of it of any bar period! It is a bit pricey butttt it is worth it at least once I will be going more than once for sure.',
        kind: 'Cocktail Bar',
        area: 'Flatiron District, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7417341, -73.9905126],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Amor Y Amargo',
        description:
          'I have not been here yet but this place is a whiskey and cigar tasting and smoking speakeasy or bar situation. I must try!',
        kind: 'Cocktail Bar',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7256166, -73.9841141],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Stumble Inn',
        description:
          'I do not remember much of this bar experience not because I was too drunk but because I just do not care about this place.',
        kind: 'Bar',
        area: 'Upper East Side, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7712422, -73.9562963],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Campbell',
        description:
          'I have not been here yet but this place looks cool, it is a bar in grand central.',
        kind: 'Bar',
        area: 'Midtown, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7526141, -73.9778257],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'JIMMY',
        description: 'I have not been here yet.',
        kind: 'Rooftop Bar',
        area: 'SoHo, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.722482, -74.0048524],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Zinc Bar',
        description: 'I have not been here yet.',
        kind: 'Jazz Bar',
        area: 'NoHo, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7297273, -73.9988973],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Arthur`s Tavern',
        description:
          'I have not been here yet but I have heard so many good things about this place.',
        kind: 'Jazz Club',
        area: 'Greenwich Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7332322, -74.0034994],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Milady`s',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'SoHo, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.725997, -74.0015829],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Zinc Bar',
        description: 'I have not been here yet.',
        kind: 'Jazz Bar',
        area: 'NoHo, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7296734, -73.9989836],
      },
    },
    /// //////////////////////////////////////////////
    /// ////////    BROOKLYN      ////////////////////
    /// //////////////////////////////////////////////

    {
      type: 'Feature',
      properties: {
        name: 'Whatever Forever',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Downtown Brooklyn, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6878427, -73.9789556],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Beer Street',
        description:
          'Really cool bar, beer garden. They have a decent beer selection for those who are beer enjoyeers.',
        kind: 'Bar',
        area: 'Williamsburg, New York',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7172355, -73.9450311],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Friends and Lovers',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Prospect Heights, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6785248, -73.9584655],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Pink Metal',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Bushwick, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7072646, -73.9396469],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'JADE',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Bushwick, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6965932, -73.9349947],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Whiskey on Grand',
        description:
          'Cool bar with a Great burger, and some games in the basement.',
        kind: 'Bar',
        area: 'Williamsburg, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7108664, -73.9503434],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Radegast Hall & Biergarten',
        description: 'I have not been here yet.',
        kind: 'Beer Hall',
        area: 'Greenpoint, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7166614, -73.9614494],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'wild birds',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Prospect Heights, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.678322, -73.958423],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Bushwick Country Club',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Williamsburg, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7110994, -73.9477951],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Greenpoint Beer & Ale Co.',
        description: 'I have not been here yet but it looks kind of cool.',
        kind: 'Brewery',
        area: 'Greenpoint, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7376747, -73.9552349],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'The Springs',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Greenpoint, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7333623, -73.9579317],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Twins Lounge',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Greenpoint, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7263177, -73.9519866],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Mika',
        description:
          'Awesome beer hall in Bushwick, Brooklyn. It opened in the middle of the pandemic... literally, the owner was going to open in March 2020 but it had to be delayed for obvious reasons.',
        kind: 'Bar',
        area: 'Bushwick, Brooklyn',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7050544, -73.9319682],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Rocka Rolla',
        description:
          'Bar in Williamsburg, Brooklyn. Nothing much to say about it.',
        kind: 'Bar',
        area: 'Williamsburg, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7138889, -73.9527778],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Gutter',
        description:
          'Cool bar in Greenpoint with a full-on bowling alley, and other games.',
        kind: 'Bar',
        area: 'Green Point, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7226667, -73.955375],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Jupiter Disco',
        description:
          'Small bar in Bushwick, Brooklyn where you can dance yourself to death if you`d like. ',
        kind: 'Bar - Dance',
        area: 'Bushwick, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7081769, -73.9235424],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Happyfun Hideaway',
        description:
          'Happyfun Hideaway is happy as long as you are happy in deep Bushwick, it is fun as long as you are also fun, you can hide and make way while dancing.',
        kind: 'Bar',
        area: 'Bushwick, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6975169, -73.9316165],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Union Pool',
        description:
          'This place is just a bar, no pool tables here. Check for other places.',
        kind: 'Bar',
        area: 'Williamsburg, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7149875, -73.9516407],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Bossa Nova Civic Club',
        description:
          'I bar hopped through a bunch of bars when I visited this place.',
        kind: 'Bar',
        area: 'Bushwick, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6978896, -73.9279335],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Tender Trap',
        description: 'I have not been here yet. And I think they are close :(',
        kind: 'Bar',
        area: 'Williamsburg, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7296345, -73.9583868],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'BAMcafé',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Downtown Brooklyn, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6866574, -73.9777373],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Baby`s All Right',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Williamsburg, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7101278, -73.9634861],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'TBA Brooklyn',
        description:
          'I have been here a couple of times and this place is cool, pretty low key, far from almost every train but the peeps that go there want to be there. Good Djs, cool staff, and everything is a dance floor.',
        kind: 'Live Music Bar',
        area: 'Williamsburg, Brooklyn',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.711123, -73.966358],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Stumpy`s Hatchet House Brooklyn',
        description: 'I have not been here yet.',
        kind: 'Recreation Center',
        area: 'Industry City, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6574, -74.0061278],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'IRL',
        description:
          'Gallery that has a speakeasy after hours?? I have not been here yet.',
        kind: 'Speakeasy',
        area: 'Greenpoint, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.727349, -73.956995],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Our Wicked Lady',
        description: 'I have not been here yet.',
        kind: 'Live Music',
        area: 'East Williamsburg, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7094323, -73.9333896],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Williamsburg Music Center',
        description: 'I have not been here yet.',
        kind: 'Live Music',
        area: 'Williamsburg, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.711305, -73.963079],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Westlight',
        description: 'Bar / Restaurant with great views of Manhattan.',
        kind: 'Rooftop Bar',
        area: 'Williamsburg, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.722297, -73.9565396],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Tambour',
        description: 'I have not been here yet.',
        kind: 'Wine Bar',
        area: 'Park Slope, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6625032, -73.9925342],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Elder Greene',
        description:
          'This bar feels more like a restaurant because of the food menu but maybe that is the reason why this place calls itself a gastropub. The beer selection and alcohol selection is big and the food menu is just as big as long as you like burgers and fried food.',
        kind: 'Bar',
        area: 'Greenpoint, Brooklyn',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7307085, -73.9575852],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Johnson`s',
        description:
          'Cool place to chill and vibe, it has even a burger restaurant inside of it in case you are hungry. It looks really small from the outside but once you go in you realize how big it is. The drinks are cheap and the music selection is top-notch. It has character and a great vibe If I am in the area I will go again.',
        kind: 'Bar',
        area: 'Bushwick, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7058242, -73.9238032],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Levee',
        description: 'Small, and cozy bar in Willy, with games and cool vibe.',
        kind: 'Bar',
        area: 'Williamsburg, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7163685, -73.961633],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'The Turk`s Inn',
        description:
          'This place has an interesting facade because it is supposed to be a restaurant but they have shows all the time and the time I visited it I went to their little rooftop bar and to be honest, it was cool. DJs playing music upstairs while down below there was a play happening all in the middle of Bushwick, Brooklyn because of course this kind of place would be on Bushwick.',
        kind: 'Bar',
        area: 'Bushwick, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.70571, -73.9223992],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Sampler',
        description: 'Interesting bar... Check it out for yourself!',
        kind: 'Bar',
        area: 'Bushwick, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.705602, -73.9224877],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Spritzenhaus33',
        description:
          'Huge beer hall with plenty of beer selections and an expansive place. Not a place to go and talk to as it is pretty loud.',
        kind: 'Bar',
        area: 'Williamsburg, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7233111, -73.952689],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Cool World',
        description:
          'The martinis, The Granny Smith margarita, and the negroni are really good, and delicious! The aesthetics of the place resembles the 70s to me. Also, this place has a big food selection and technically is a restaurant not, a bar but we only got drinks here and we were impressed. Definitely would go back again. ',
        kind: 'Bar',
        area: 'Greenpoint, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7234951, -73.9520195],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Caribbean Social Club',
        description:
          'I have not been here yet but this is Tonnitas bar, the bar that a lot of celebrities, and writers go to because of the owner.',
        kind: 'Bar',
        area: 'Williamsburg, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7134213, -73.9591367],
      },
    },

    /// //////////////////////////////////////////////
    /// ////    DOMINICAN REPUBLIC    ///////////////
    /// //////////////////////////////////////////////
    {
      type: 'Feature',
      properties: {
        name: 'Gabiao Rooftop Bar',
        description: 'I have not been here yet.',
        kind: 'Rooftop Bar',
        area: 'Santo Domingo, Dominican Republic',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4698165, -69.9279886],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Local 3',
        description:
          'This is the only bar where I got great cocktails in my stay in the Dominican Republic in any of the main spirits (Gin, Rum, Vodka). Rum was my favorite one of them all. Cocktails are not that cheap so be aware that prices are just a tap cheaper than New York prices. DR = 10 to 14. NYC = 12 to 20.',
        kind: 'Bar',
        area: 'Naco, Santo Domingo',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4742995, -69.9311974],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: '75 Grados',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Naco, Santo Domingo',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4751101, -69.9272335],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'La Gloria Rooftop',
        description: 'I have not been here yet.',
        kind: 'Rooftop Bar',
        area: 'Piantini, Santo Domingo',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4763927, -69.926918],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Irish Pub',
        description:
          'This bar is supposed to be the Irish pub of the Dominican Republic. It is an interesting place with live rock music which is cool but it is too crowded. It is like the place to go for a lot of people now thus it has way too many people and it is better to go somewhere else.',
        kind: 'Irish Pub',
        area: 'Piantini, Santo Domingo',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4653722, -69.935123],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: '300 Bar Lounge',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Bella Vista, Santo Domingo',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4527591, -69.9599377],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Sparta Lounge',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Naco, Santo Domingo',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4591214, -69.9323447],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'La Resistencia',
        description:
          'I have not been here but my friends say this is a cool place and it is putting the resistance to a new law enacted in the DR which says that bars, clubs, and others need to close at the latest at 2 am but "la resistencia" is open until 6 AM or sunrise.',
        kind: 'Bar',
        area: 'Zona Colonial, Santo Domingo',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4710645, -69.8904574],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Quintana Bar',
        description:
          'Cool spot to listen to some live music with the warmth of the night breezy and in a beautiful colonial building.',
        kind: 'Bar',
        area: 'Zona Colonial, Santo Domingo',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4775907, -69.8836697],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Onno`s Zona Colonial Bar & Restaurant',
        description:
          'Nice spot for a variety of music from house to some merengue. It has an inside bar and a backyard with a view of the beautiful colonial buildings.',
        kind: 'Bar',
        area: 'Zona Colonial, Santo Domingo',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4732314, -69.8852066],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Marketcito',
        description:
          'Beer hall in the middle of santo domingo, with a decent selection of beers.',
        kind: 'Bar',
        area: 'Naco, Santo Domingo',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.470011, -69.9272214],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Vida Loca Bar',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Zona Colonial, Santo Domingo',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4681175, -69.8896409],
      },
    },

    /// //////////////////////////////////////////////
    /// ///////////    QUEENS    /////////////////////
    /// //////////////////////////////////////////////
    {
      type: 'Feature',
      properties: {
        name: 'The Ditty',
        description:
          'After a long time of wanting to go to this place, I finally did it! This place is awesome. This is an inconspicuous place because it looks small but then you realize it has a huge garden and all your expectations are broken. They have a big collection of board games for you to play while getting hammered (what could go wrong) Monopoly and cocktails is the game in town. My fave drink is the coconut coffee rum mixed, OMG it is good for those that enjoy coffee or coconuts. I will try to go again mostly because of this... They have a fricking NES at Bar ready for you to take on the world!! I am a simple person.',
        kind: 'Bar',
        area: 'Astoria, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7748385, -73.9086568],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Jack Jones Gastropub',
        description: 'Irish Pub',
        kind: 'Really good Irish pub with one of the best Fish and Chips that I have had in NYC so far. Would probably go back there again at another point. If you are in Astoria and want some food and drinks this might be your spot.',
        area: 'Astoria, New York',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7734208, -73.9066178],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Rivercrest',
        description:
          'Cool Sports bar with food that is not bad at all. I expected it to be worse than it was, so I was pleasantly surprised. I would go back there again at another point.',
        kind: 'Sports Bar',
        area: 'Astoria, New York',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7751558, -73.9090193],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Sek`end Sun',
        description: 'Cool bar, with a nice backyard.',
        kind: 'Bar',
        area: 'Astoria, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7615333, -73.9241685],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Oliver`s Astoria',
        description: 'Great old fashioned whiskey!',
        kind: 'Bar',
        area: 'Astoria, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7595681, -73.9197395],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Attic',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Flushing, Queens',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7624984, -73.8278276],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Last World',
        description:
          'The vibe of the place is of a speakeasy, but this is far from one. I did like it, it is pretty relaxed, a place to go after work or to enjoy some drinks with friends or girlfriend with. This place is girlfriend approved so that means they are doing something right. The drink menu is extensive and with plenty of wine selection too mixed with some foods.',
        kind: 'Cocktail Bar',
        area: 'Astoria, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7753693, -73.9099682],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Infamous',
        description:
          'This is supposed to be a speakeasy. It is next to MoMA PS1 and it is behind the extra butter clothing store in LIC, but to get in is not through the store but through the back door that is street facing... is that a speakeasy? for me, no but their pizza was good and the drinks were okay. If you want an attempt at a speakeasy in LIC this is your spot I guess.',
        kind: 'Speakeasy',
        area: 'LIC, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7453266, -73.9474952],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Focal Point Beer Co',
        description:
          'I have not been here but from the looks of it, it seems Interesting.',
        kind: 'Brewery',
        area: 'LIC, Queens',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7501233, -73.9486611],
      },
    },

    /// //////////////////////////////////////////////
    /// ///////////     United States    ////////////
    /// //////////////////////////////////////////////

    {
      type: 'Feature',
      properties: {
        name: 'Blackbird Ordinary',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Brickell, Miami',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [25.7667169, -80.1951854],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'La Factoría',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'San Juan, Puerto Rico',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4672545, -66.1175413],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Scholars American Bistro and Cocktail Lounge',
        description: 'I have not been here yet.',
        kind: 'Cocktail bar',
        area: 'Boston, Massachusetts',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [42.3577549, -71.0591691],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Lamplighter Brewing Co. - Broadway',
        description: 'I have not been here yet.',
        kind: 'Brewery',
        area: 'Cambridge, Massachusetts',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [42.36799, -71.0979015],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Rhythm & Vine',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Fort Lauderdale, Florida',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [26.1265368, -80.1379919],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Cafe Du Nord',
        description: 'I have not been here yet.',
        kind: 'Live Music Venue',
        area: 'San Francisco, California',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [37.7666241, -122.4304184],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Bent Run Brewing Company',
        description:
          'Cool brewery with live music, games, an awesome selection of beers, and my favorite root beer to this day! If you are in Warren, PA give them a visit.',
        kind: 'Brewery',
        area: 'Scandia, PA',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.8429087, -79.1470254],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Old Glory',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Nashville, Tennessee',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [36.1430041, -86.7916463],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Attaboy',
        description: 'I have not been here yet.',
        kind: 'Cocktail Bar',
        area: 'Nashville, Tennessee',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [36.1761096, -86.7554403],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Marilou',
        description:
          'I have not been here yet but their drinks and cocktails look delish.',
        kind: 'Cocktail Bar',
        area: 'New Orleans, LA',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [29.9487598, -90.0720388],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Cane and Table',
        description:
          'Almost all the drinks are made with some type of rum and I am here for it! Love the vibe, loved the drinks, and they have a huge garden in the back to chill get some drinks, eat some food, and have a good time. I loved this place.',
        kind: 'Carribeam Bar',
        area: 'New Orleans, LA',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [29.9602514, -90.0599082],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The John',
        description:
          'I have not been here yet but I heard that the live jazz music here is pretty good.',
        kind: 'Bar',
        area: 'New Orleans, LA',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [29.9663133, -90.0580655],
      },
    },

    /// //////////////////////////////////////////////
    /// ///////////     Asia     /////////////////////
    /// //////////////////////////////////////////////
    {
      type: 'Feature',
      properties: {
        name: 'AFROBAR',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Osaka, Japan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [34.6715367, 135.5045825],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Cask Strength',
        description:
          'I have not been here yet but this is supposed to be a sophisticated and great bar with an expansive selection of spirits.',
        kind: 'Bar',
        area: 'Tokyo, Japan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [35.663836, 139.7340318],
      },
    },

    /// //////////////////////////////////////////////
    /// ///////////     Europe     /////////////////////
    /// //////////////////////////////////////////////
    {
      type: 'Feature',
      properties: {
        name: 'The Waiting Room',
        description: 'I have not been here yet.',
        kind: 'Live Music Venue',
        area: 'London, United Kingdom',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [51.5620857, -0.0739683],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Nevermind',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Barcelona, Spain',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.3851589, 2.1664084],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Paradiso',
        description:
          'I have not been here yet but this is supposed to be the best bar in the world. Number 1 according to this website... best50bars in the world.',
        kind: 'Cocktail bar',
        area: 'Barcelona, Spain',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.3836945, 2.1836719],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'R2',
        description: 'I have not been here yet.',
        kind: 'Bar',
        area: 'Marseille, France',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [43.3079371, 5.3640841],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Ice Kube Bar',
        description: 'I need to go here when in Paris!',
        kind: 'Bar',
        area: 'Paris, France',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [48.8865207, 2.35881],
      },
    },
    /// //////////////////////////////////////////////
    /// ///////////     Americas     /////////////////////
    /// //////////////////////////////////////////////

    {
      type: 'Feature',
      properties: {
        name: 'La Chagra',
        description: 'I have not been to this bar in Medellin, Colombia yet.',
        kind: 'Bar',
        area: 'Medellin, Colombia',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [6.2066915, -75.5642431],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Vintrash',
        description: 'I have not been to this Medellin bar yet.',
        kind: 'bar',
        area: 'Medellin, Colombia',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [6.2079191, -75.5660177],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Barra Matilde Mi Amor',
        description: 'I have not been here yet.',
        kind: 'Cocktail Bar',
        area: ' Guadalajara, Mexico',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [20.6726872, -103.3659156],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: '',
        description: 'I have not been here yet.',
        kind: '',
        area: '',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [],
      },
    },
  ],
};

export default Bars;
