// All the data has been collected by Ronny Coste throughtout the years.
/// ////////////////////////////////////////////////
/// ///////        Restaurants        //////////////
/// ////////////////////////////////////////////////

const Food = {
  type: 'FeatureCollection',
  features: [
    /// ////////////////////////////////////////////////
    /// ////////         Manhattan       ///////////////
    /// ////////////////////////////////////////////////
    {
      type: 'Feature',
      properties: {
        name: 'Ye`s Apothecary 夜莺',
        description:
          'I have not been here yet but it looks like a great spot to go to.',
        kind: 'Sichuan restaurant',
        area: 'LES, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7194051, -73.9897702],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Cafe R',
        description:
          'Cafe R is supposed to be a cafe but it is more like a collections of restaurant under the same roof. No coffee here at least not the good kind but the food is pretty good. They also have buffet if you feel like having that ( which is good ) This place is in the infamous park of midtown, ie 32st by penn station.',
        kind: 'Restaurant',
        area: 'Midtown, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7487092, -73.9897935],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Mei Lai Wah',
        description:
          'This bakery in chinatown has some really good baked good. it is pretty cheap and if you want to eat something quick for $3 dollars this is your spot.',
        kind: 'Chinese Restaurant',
        area: 'Chinatown, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7155666, -73.9979923],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Tasty Dumpling',
        description:
          'This is my favorite dumpling place in chinatown! They are really good and tasty just like they have on their name. If you are in chinatown with only $3 dollars and wants some awesome and fresh dumplings this is your spot.',
        kind: 'Dumpling Restaurant',
        area: 'Chinatown, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7149542, -73.9996032],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'May Wah Fast Food',
        description:
          'I did not love or feel this place even though i tried it twice... let`s just leave it at that.',
        kind: 'Chinese Resturant',
        area: 'Chinatown, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7181865, -73.9984559],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The View Restaurant & Lounge',
        description:
          'I have not been here yet... but it have been reccomended to me by a couple of friends, and the view. The view is what you here for.',
        kind: 'Rooftop - American Restaurant',
        area: 'Midtown, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7588048, -73.9863224],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: '375° Chicken `n Fries',
        description:
          'Good fried chicken joint in the lower east side. It is pretty good but i cannot tell the different between their sandwiches and popeyes.',
        kind: 'Fast Food',
        area: 'Lower East Side, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7196132, -73.9885413],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Pulqueria Restaurant Agave Bar',
        description:
          'Cool mexican restaurant and bar, it is in the basement of the most famous street of chinatown. Their drinks presentation it is really cool.',
        kind: 'Mexican Restaurant',
        area: 'Chinatown, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7143975, -73.9982533],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Veselka',
        description:
          'Veselka is a pretty iconic restaurant of the East village. Pretty good food, nice outdoor seating, and great for people watching.',
        kind: 'Ukrainian Restaurant',
        area: 'East Village, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7289775, -73.9871531],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Jackdaw',
        description:
          'Great spot for boozy brunch and/or bottemless brunch. Anything else there might be better options.',
        kind: 'Bar',
        area: 'East Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7318475, -73.9856341],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Tortaria',
        description:
          'I have been here once, and it was on New Years eve with a friend! It was a great night, with good food.',
        kind: 'Mexican Restaurant',
        area: 'NoHo, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.73387, -73.99304],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Carroll Place',
        description:
          'Italian restaurant that is in a popping area / neighborhood.',
        kind: 'Italian Restaurant',
        area: 'NoHo, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7286426, -73.9997594],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Russian Tea Room',
        description: 'Cool place, shitty food.',
        kind: 'Fine Dining',
        area: 'Midtown, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7648698, -73.9794271],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Nom Wah Tea Parlor',
        description:
          'Oldest Restaurant in New York City, and of chinatown. Their Dim Sum is tasty, and delicious. Worth the wait in line at least for 20min. Only take cash but It is definetely worthwhile.',
        kind: 'Chinese Restaurant',
        area: 'Chinatown, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7144447, -73.998254],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'North Miznon',
        description:
          'Good Mediterranean / Israeli restaurant for those times when you crave Mediterranean food while on Upper West Side.',
        kind: 'Mediterranean restaurant',
        area: 'Upper West Side, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7784809, -73.9807187],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Sundaes and Cones',
        description: 'decent Ice Cream.',
        kind: 'Ice Cream',
        area: 'East Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7309957, -73.9894062],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Umami Burger',
        description: 'Their burgers are really good! I would say go try it.',
        kind: 'Fast Food',
        area: 'FiDI, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7120627, -74.0151624],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Souvlaki GR',
        description:
          'Great greek restaurant in Lower East Side. I really like it and have been there many times.',
        kind: 'Greek Restaurant',
        area: 'Lower East Side, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7211257, -73.9871559],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'La Salle Dumpling Room',
        description:
          'I haven`t been back here so there might be a reason for it.',
        kind: 'Chinese Restaurant',
        area: 'West Harlem, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7732183, -73.989629],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Ruby`s Cafe',
        description: 'Get shirleys summer drink while you can! Nolita Dirtbag.',
        kind: 'Australian Restaurant',
        area: 'Nolita, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7222884, -73.9963121],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Vida Verde',
        description:
          'Cool restaurant, the  ambiance is nice, and the drinks are good.',
        kind: 'Mexican Restaurant',
        area: 'Midtown, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7649809, -73.9830994],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Bronson’s Burgers',
        description:
          'Great burguer joint! A bit pricey but it is definetely worth it.',
        kind: 'Fast Food',
        area: 'Nolita, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7231758, -73.9957423],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Marylou',
        description:
          'Great french restaurant in the villag! They have live music on wednesday, on friday it turns into a party, and the drinks, food, and peeps are awesome.',
        kind: 'French Restaurant',
        area: 'East Village, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.728502, -73.9871284],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Sonnyboy',
        description:
          'If you like wisconsin styled bloddy marys this might be one of your few spot that does it. Few less if they have to be in the Lower East Side.',
        kind: 'Australian restaurant',
        area: 'Lower East Side, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7205154, -73.9901841],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'La Esquina',
        description:
          'I think this spot was my first ever taco place or Mexican place that i went to when i arrive to New York back in 2017. Please DO NOT JUDGE ME!',
        kind: 'Mexican Restaurant',
        area: 'Midtown, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7213987, -73.9975945],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Hometown Hotpot & BBQ',
        description: 'This is not the best KBBQ ever but it is pretty good.',
        kind: 'Korean Restaurant',
        area: 'Little Italy, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.719403, -73.996849],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Joe`s Shanghai',
        description: 'I love their dumplings.',
        kind: 'Chinese Restaurant',
        area: 'Chinatown, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.715684, -73.9967863],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Tacombi',
        description: 'Okeyish chain for mexican food... pretty okay, i guess.',
        kind: 'Mexican Restaurant',
        area: 'Greenwich Village, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7311062, -74.0028768],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Kuxe',
        description:
          'Cool restaurant with good drinks and appetizers around NYU / Washington Sq park area.',
        kind: 'Mexican restaurant',
        area: 'NoHo, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7287148, -73.9995887],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Los Tacos No.1',
        description:
          'Their Tacos are pretty good for a chain! Definately try them they are all over the city.',
        kind: 'Mexican Restaurant',
        area: 'Hells Kitchen, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.757344, -73.9877278],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Mama Fina House of Filipino Sisig',
        description:
          'Their name has Sisig for a reason. That is because they are great. This filipino restaurant in the village is a must try.',
        kind: 'Filipino restaurant',
        area: 'East Village, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7282008, -73.982161],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'BO`s Bagels',
        description: 'Love Bagels, Love BO`s.',
        kind: 'Bagel Shops',
        area: 'Harlem, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8040794, -73.954158],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'King Dumplings',
        description: 'Can never go wrong with dumplings. Chinatown dumplighs.',
        kind: 'Dumpling Restaurant',
        area: 'Chinatown, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7159626, -73.9917091],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Burrito Box',
        description:
          'I love their burritos! I have been going to this place for about',
        kind: 'Mexican Restaurant',
        area: 'Midtown, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7682479, -73.985727],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Saigon Shack',
        description:
          'Their pho is amezingly good! Also their are not that many vietnamese restaurant in the city or not that many that i know of so so far this is the best one for me.',
        kind: 'Vietnamese restaurant',
        area: 'NoHo, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7296889, -74.000625],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Rudy`s Bar & Grill',
        description:
          'The cheapest bear of the city comes with the cheapest hotdogs of New York City. So $5 Dollars and you get both, Do not ask questions.',
        kind: 'Bar',
        area: 'Hells Kitchen, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7600309, -73.9917951],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Morgenstern’s Finest Ice Cream',
        description: 'My fave Ice Cream shop in the entire New York City Area.',
        kind: 'Ice Cream',
        area: 'NoHo, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7272498, -73.9998678],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Soothr',
        description:
          'Great Thai restaurant i think this is probably one of the best I have tried so far.',
        kind: 'Thai restaurant',
        area: 'East Village, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7322941, -73.987338],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'La Grande Boucherie',
        description:
          'Great French Restaurant. I love it this place the look of it is on another level.',
        kind: 'French Restaurant',
        area: 'Midtown, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7626274, -73.9808411],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'La Casa Del Mofongo',
        description:
          'Best Dominican Restaurant in New York City were you will feel like you are in Santo Dominigo.',
        kind: 'Dominican Restaurant',
        area: 'Washington Heights, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8502639, -73.9332046],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Olio e Più',
        description:
          'Nice Italian Restaurant, not my fave, not the worse just okay. But the Ambiance and the amount of peeps here for people watching is outstanding. There food the time i visited was a bit to much oily for my taste but it is okay.',
        kind: 'Italian Restaurant',
        area: 'Greenwich Village, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7338794, -73.9999408],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Molly`s Cupcakes',
        description:
          'Great Fricking cupcakes! The best i would say a bit pricey but worth it every penny.',
        kind: 'Dessert',
        area: 'greenwich Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7301085, -74.002537],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'La Lanterna di Vittorio',
        description:
          'I loved this place the garder is beautiful, it is in Greenwich Village, their lasagna is the best lasagna I have ever tried in NYC.',
        kind: 'Italian Restaurant',
        area: 'Greenwich Village, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7306651, -74.0000496],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Village Square Pizza',
        description:
          'Best Fricking pizza in the New York City Metro Area!!! Go it is in the East Village.',
        kind: 'Fast Food',
        area: 'East Village, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7274812, -73.9827222],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Up Thai',
        description: 'My second fave thai place before I went to Soothr.',
        kind: 'Thai restaurant',
        area: 'Upper East side, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.769951, -73.9578638],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Rosemary`s',
        description:
          'One of my fave italian restaurant and this place is even approved by my mom.',
        kind: 'Italian Restaurant',
        area: 'Greenwich Village, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7347908, -73.9998812],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Jongro BBQ',
        description:
          'My favorite KBBQ place, in the best place for KBBQ Korea Town. come here for that and enjoy.',
        kind: 'Korean Restaurant',
        area: 'Korean Town, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7475648, -73.9870015],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Black Tap',
        description:
          'Great Shakes and burgers here. Again GREAT SHAKES! I think that would be the main reason i would go here for.',
        kind: 'Fast Food',
        area: 'Midtown, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7635483, -73.9797627],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'BETTY',
        description: 'This restaurant looks cool but i have not been here yet.',
        kind: 'American Restaurant',
        area: 'Lower East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7137608, -73.9878467],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Watermark',
        description:
          'I have not been here yet. But I have been to the pier many times and this places looks cool, with a waterfront and nice views.',
        kind: 'American Restaurant',
        area: 'FiDi, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.704517, -74.003123],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'La Bonbonniere',
        description: 'I have not been here yet.',
        kind: 'Diner',
        area: 'Meatpacking District, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7377793, -74.004359],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Casa Cipriani New York',
        description: 'I have not been here yet.',
        kind: 'American Restaurant',
        area: 'FiDi, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7010955, -74.0118779],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Thai Villa',
        description: 'I have not been here yet.',
        kind: 'Thai Restaurant',
        area: 'Flatiron, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7390045, -73.9906704],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Au Cheval',
        description: 'I have not been here yet.',
        kind: 'American Restaurant',
        area: 'Tribeca, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7181159, -74.0019617],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Cathédrale Restaurant',
        description: 'I have not been here yet.',
        kind: 'French restaurant',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7315059, -73.9895444],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Bottino',
        description: 'I have not been here yet.',
        kind: 'Italian Restaurant',
        area: 'Chelsea, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7484846, -74.0033127],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Raoul`s',
        description: 'I have not been here yet.',
        kind: 'French Restaurant',
        area: 'SoHo, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7261816, -74.0021307],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Fraunces Tavern',
        description: 'I have not been here yet.',
        kind: 'American Restaurant',
        area: 'FiDi, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7034181, -74.0113649],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Raclette',
        description: 'I have not been here yet.',
        kind: 'Sandwich Restaurant',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7289261, -73.9806299],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Lucien',
        description: 'I have not been here yet.',
        kind: 'French restaurant',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7233331, -73.9880763],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Papatzul Soho',
        description: 'I have not been here yet.',
        kind: 'Mexican Restaurant',
        area: 'Tribeca, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7221555, -74.0036742],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Catch NYC',
        description: 'I have not been here yet.',
        kind: 'Seafood Restaurant',
        area: 'Meatpacking District, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7402172, -74.0062995],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Amor loco',
        description:
          'Nice looking mexican restaurant in the middle of manhattan... Almost in the middle of timesquare and pretty close to broadway theater so food before or after a show here are a good choice! mostly with the Drinks as I felt in love the with "Corny Colada" Great drink and the food is okay you are going to be full.',
        kind: 'Mexican Restaurant',
        area: 'Hells Kitchen, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7578942, -73.9839177],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Cafe Du Soleil',
        description: 'I have not been here yet.',
        kind: 'French Restaurant',
        area: 'Upper West Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8000562, -73.9684479],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Quality Meats',
        description: 'I have not been here yet.',
        kind: 'American restaurant',
        area: 'Midtown, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7650085, -73.9761481],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Mediterraneo',
        description: 'I have not been here yet.',
        kind: 'Italian Restaurant',
        area: 'Upper East side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7650482, -73.9608071],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'The Terrace',
        description: 'I have not been here yet.',
        kind: 'French Restaurant',
        area: 'Midtown, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.759149, -73.984164],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Felix',
        description: 'I have not been here yet.',
        kind: 'French restaurant',
        area: 'SoHo, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7225419, -74.0037968],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Upper East Café',
        description: 'I have not been here yet.',
        kind: 'American Restaurant',
        area: 'Upper East side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7634051, -73.9654981],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'The Garden',
        description: 'I have not been here yet.',
        kind: 'Fine dining',
        area: 'Murray Hill, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7623923, -73.9710279],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Sant Ambroeus | Nolita',
        description: 'I have not been here yet.',
        kind: 'Italian Restaurant',
        area: 'Nolita, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7233462, -73.9965257],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Sant Ambroeus | Greenwich',
        description: 'I have not been here yet.',
        kind: 'Italian Restaurant',
        area: 'Greenwich Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7354187, -74.003149],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Garden Court Café',
        description: 'I have not been here yet.',
        kind: 'Asian Restaurant',
        area: 'Upper East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.769841, -73.96429],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Palma',
        description: 'I have not been here yet.',
        kind: 'Italian Restaurant',
        area: 'Greenwich Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7312011, -74.0023412],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Ladurée',
        description: 'I have not been here yet.',
        kind: 'French Restaurant',
        area: 'SoHo, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7243143, -74.0025064],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Mokyo',
        description: 'I have not been here yet.',
        kind: 'Korean Restaurant',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7271382, -73.9839549],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Ladybird',
        description: 'I have not been here yet.',
        kind: 'Vegan Restaurant',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7266801, -73.9845333],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Sarabeth`s',
        description:
          'The servers are attentive and really knowledgable of the menu and full of recommendation.',
        kind: 'Casual Dining',
        area: 'Grammercy, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.742513, -73.984368],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Atera',
        description: 'I have not been here yet.',
        kind: 'American Restaurant',
        area: 'Tribeca, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7169003, -74.0055631],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Jungsik',
        description: 'I have not been here yet.',
        kind: 'Korean Restaurant',
        area: 'Tribeca, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7188267, -74.0090751],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Gabriel Kreuther',
        description: 'I have not been here yet.',
        kind: 'French Restaurant',
        area: 'Midtown, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7545381, -73.9825026],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Daniel',
        description: 'I have not been here yet.',
        kind: 'French Restaurant',
        area: 'Upper East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7668083, -73.9675769],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Yard House',
        description: 'I have not been here yet.',
        kind: 'American Restaurant',
        area: 'Midtown, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7550829, -73.9873573],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'B&H Dairy',
        description: 'I have not been here yet.',
        kind: 'Diner',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7284734, -73.9880151],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Cooper`s Craft & Cocktails',
        description: 'I have not been here yet.',
        kind: 'American Restaurant',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7269839, -73.9890629],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'PHO` Seng',
        description: 'I have not been here yet.',
        kind: 'Vietnamese restaurant',
        area: 'NoHo, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.730393, -73.986065],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Tompkins Square Bagels',
        description:
          'I love their bagels, and their cream cheese. All of them are tasty, fresh, and delicious.',
        kind: 'Bagel shop',
        area: 'East Village, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7281983, -73.9821675],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'While We Were Young Kitchen & Cocktails',
        description: 'I have not been here yet.',
        kind: 'Casual Dining',
        area: 'Greenwich Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.734403, -74.002696],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'LOULOU',
        description: 'I have not been here yet.',
        kind: 'French Restaurant',
        area: 'Chelsea, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7426189, -73.9999945],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'MONO+MONO',
        description: 'I have not been here yet.',
        kind: 'Korean Restaurant',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7254016, -73.9881049],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Nusr-Et Steakhouse New York',
        description: 'I have not been here yet.',
        kind: 'Steak house',
        area: 'Midtown, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7612869, -73.9786067],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Café Tucano',
        description: 'I have not been here yet.',
        kind: 'Spanish restaurant',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7293093, -73.9879105],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Nocciola Ristorante',
        description: 'I have not been here yet.',
        kind: 'Italian restaurant',
        area: 'East Harlem, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7975043, -73.9383816],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Frenchette',
        description: 'I have not been here yet.',
        kind: 'French Restaurant',
        area: 'Tribeca, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7196192, -74.0056937],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Marlow Bistro',
        description: 'I have not been here yet.',
        kind: 'Mediterranean restaurant',
        area: 'Upper West Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8029336, -73.9643334],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Emmett`s',
        description: 'I have not been here yet.',
        kind: 'Fast food',
        area: 'SoHo, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7273085, -74.0024778],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'At Nine Restaurant & Bar',
        description: 'I have not been here yet.',
        kind: 'Thai Restaurant',
        area: 'Hells Kitchen, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7586939, -73.9920561],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Chinito Latino Hibachi Fusion',
        description: 'I have not been here yet.',
        kind: 'Dominican Asian Restaurant',
        area: 'Inwood, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.862169, -73.925513],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'YUBU',
        description:
          'Really interesting and good korean quick bites. I really liked it. I would say it is a must try for people that love and palette adventure lmao.',
        kind: 'Korean restaurant',
        area: 'East Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7270393, -73.9862331],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Two Hands',
        description:
          'Australian-inspired restuarant ie. Breakfast restaurant ie. toast paradise. Their coffee are really good and the food is really good too. good brunch spot in the heart of NoHo. The Purple taro latte is a must try!! ',
        kind: 'Australian Restaurant',
        area: 'NoHo, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7263096, -73.995669],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'S&P Lunch',
        description:
          'Really good sandwich shop and restaurant. The vibe is kind of 80`s, and simple. I really like this place and the story behind it is pretty cool to as this restaurant has been open since 80`s, and in 2021 the owners were going to close it but Nicholas Braun and others peeps decided to invest in this place to keep open.',
        kind: 'Restaurant',
        area: 'Flatiron, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.741132, -73.9901715],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Smith & Wollensky',
        description: 'I have not been here yet.',
        kind: 'Steak House',
        area: 'Midtown East, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7551977, -73.9708831],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Crown Shy',
        description: 'I have not been here yet.',
        kind: 'American restaurant',
        area: 'FiDi, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7065102, -74.0078413],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Lexington Candy Shop',
        description:
          'I have not been here yet but the only reason this is on the list is becuase they make their coke or pepsi like your grand-grand-parents used by mixing seltzer water with coke / pepsi syrup. Something so old merits to be great just for the sake of being consistent on staying true to the 19 century lol.',
        kind: 'Diner',
        area: 'Upper East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7774621, -73.9571982],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Paesano',
        description:
          'This Italian restaurant has some good lasagna but you gotta love cheese to enjoy it. The star of this place tho is the the frame of the building that resemble that of an old building or house in Italy or early New York not because of its ostentation but rather the lack thereof. maybe that is a feature of Little Italy but I do not know. Also this is a cozy place to bring your girlfriend and talk about something romantic like Godfather.',
        kind: 'Italian Restaurant',
        area: 'Little Italy, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7185598, -73.9974801],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Favela Cubana',
        description:
          'I went there after a shoot with the crew and it was an amazing atmostphere (maybe we did that ourselves lol), playing latin music (Cuban, Puerto Rican, and Dominican), great drinks, and the food was good too. It is definetely a good place to try food from the caribean. If you are craving Cuban food and are in the NYU / NoHo area try it out.',
        kind: 'Cuban Restaurant',
        area: 'NoHo, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7284873, -73.9980696],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Sam`s Fried Ice Cream',
        description:
          'This ice cream are delicious! Try them out at least once. I have had this ice cream so many times but more often than not I get them in food festivals or street activities around the city. They are always there selling this tasty ice creams.',
        kind: 'Ice Cream',
        area: 'Dimes Square, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7158238, -73.9915722],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Brigadeiro Bakery',
        description:
          'Small brazilian dessert place South of Houston Street. their cookies and cupcakes are good. nothing crazy.',
        kind: 'Dessert',
        area: 'SoHo, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.727448, -74.0017397],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Kopitiam',
        description:
          'My First time trying malaysian food was here and my malaysian friend says that they have some of the closest taste of the food to how it is in malaysia. Really good and their skylights are cool too.',
        kind: 'Malaysian restaurant',
        area: 'Dimes square, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7138751, -73.9909771],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Daniela Trattoria',
        description:
          'This place was a trip... My friend did the reservation thinking they would have a brunch menu or something of those sorts as they said on their site but they did not and she was pissed lol. The food is okay and the drinks too. There are better italian places but if you are in a hurry in hells kitchen, midtown this will do the job.',
        kind: 'Italian Restaurant',
        area: 'Hells Kitchen, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7592064, -73.9880664],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Andrews NYC Diner',
        description:
          'I have only been to this diner before the pandemic and it was okay did not hate it, did not love it. Would I go back now? probably not. Also I think I tried all the diners in the 34 street area lol.',
        kind: 'Diner',
        area: 'Midtown, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7516787, -73.9896976],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Tick Tock Diner NY',
        description:
          'I have only been to this diner before the pandemic and it was okay did not hate it, did not love it. Would I go back now? probably not. The main reason that I have been there so often is just proximity to were I and my friends were... Also I think I tried all the diners in the 34 street area lol.',
        kind: 'Diner',
        area: 'Midtown, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7525107, -73.9936687],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Skylight Diner',
        description:
          'This is my favorite of all of 34st diner`s why? I do not know because the food is not that better but I think the ambiance is atmosphere is waayy better than the others. Also the have a bigger dessert selection.',
        kind: 'Diner',
        area: 'Midtown, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7533706, -73.9967566],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Berimbau Brazilian Kitchen',
        description:
          'This brazilian restaurant is a must try of NYC in my opinion! Their are good, the food is good, the garden is cool, the vibe is cool and it is not crazy expensive. I had a caipirinha for drink and almost the entire menu for food of course shared with my friends.',
        kind: 'Brazilian Restaurant',
        area: 'Greenwich Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7300863, -74.0036158],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: '99 Favor Taste',
        description: 'I have not been here yet.',
        kind: 'Chinese Restaurant',
        area: 'Lower East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.717524, -73.992583],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'ZiZi',
        description: 'I have not been here yet.',
        kind: 'Mediterranean restaurant',
        area: 'Chelsea, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7429063, -73.9999607],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Le French Diner',
        description: 'I have not been here yet.',
        kind: 'French Restaurant',
        area: 'Lower East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7220162, -73.9880246],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Kiki`s',
        description: 'I have not been here yet.',
        kind: 'Greek Restaurant',
        area: 'Dimes Square, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7145335, -73.9919902],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: '886',
        description: 'I have not been here yet.',
        kind: 'Taiwanese restaurant',
        area: 'East Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7287968, -73.9887127],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Bodega Negra',
        description: 'I have not been here yet.',
        kind: 'Casual Dining',
        area: 'Chelsea, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7420956, -74.0035786],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Bocaditos Bistro',
        description: 'I have not been here yet.',
        kind: 'Casual Dining',
        area: 'Inwood, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8668707, -73.9239955],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Grey Dog',
        description: 'I have not been here yet.',
        kind: 'American Restaurant',
        area: 'NoHo, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7337952, -73.993199],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Flatiron Room',
        description: 'I have not been here yet.',
        kind: 'American Restaurant',
        area: 'Flatiron, manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7445183, -73.9904632],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Russ & Daughters Cafe',
        description: 'I have not been here yet.',
        kind: 'American restaurant',
        area: 'Lower East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7196181, -73.9895779],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Pio Pio 8',
        description: 'I have not been here yet.',
        kind: 'Peruvian Restaurant',
        area: 'Hells Kitchen, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7605535, -73.9945268],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Han Dynasty',
        description: 'I have not been here yet.',
        kind: 'Chinese Restaurant',
        area: 'NoHo, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7322306, -73.9882516],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Thái Sơn',
        description: 'I have not been here yet.',
        kind: 'Vietnamese Restaurant',
        area: 'Chinatown, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7168378, -73.9996312],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Republica Restaurant & Rooftop',
        description: 'I have not been here yet.',
        kind: 'Dominican restaurant',
        area: 'Inwood, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8636443, -73.9263601],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Delmonico`s',
        description: 'I have not been here yet.',
        kind: 'Steak Restaurant',
        area: 'FiDi, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7050268, -74.0102557],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Freemans',
        description:
          'Great restaurant! The decor is top notch for those that love the outdoors, and/or Americana culture.',
        kind: 'American Restaurant',
        area: 'Lower East Side, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7219877, -73.9924573],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Sons of Essex',
        description: 'I have not been here yet.',
        kind: 'American Restaurant',
        area: 'Lower East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7202075, -73.9876239],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Wok Wok Southeast Asian Kitchen',
        description: 'I have not been here yet.',
        kind: 'Asian Restaurant',
        area: 'Chinatown, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7140559, -73.9988387],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Piccola Cucina Uptown',
        description: 'I have not been here yet.',
        kind: 'Italian Restaurant',
        area: 'Upper East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7632468, -73.9689825],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Mari Vanna',
        description: 'I have not been here yet.',
        kind: 'Russian Restaurant',
        area: 'Flatiron, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7388833, -73.988525],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Lobster Place',
        description:
          'Their sushi, oysters, and seafood in general is pretty fresh and tasty. I would say that i did not have high hopes for it but I ended up liking it and probably will go back.',
        kind: 'Seafood Restaurant',
        area: 'Chelsea, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.74277, -74.0059828],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Rubirosa',
        description:
          'My girlfriends faves, and Harry Styles approves so you know you can go wrong with this italian place. ',
        kind: 'Italian Restaurant',
        area: 'Nolita, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7227208, -73.9961387],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Prince Street Pizza',
        description:
          'Try it but do not succum on the rabbit hole of places that are okay but not the best as everyone says. Do not follow blindly.',
        kind: 'Fast Food',
        area: 'Nolita, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.723013, -73.9945907],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Caffè Panna',
        description:
          'One of the best ice cream shops in the city. Worth it to stand in line for some time... I only only waited for 10 min.',
        kind: 'Ice Cream',
        area: 'Gramercy, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7369692, -73.9867977],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Absolute Bagels',
        description: 'I have not been here yet.',
        kind: 'Bagel shop',
        area: 'Hamilton Heights, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8025065, -73.9674142],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Mighty Quinn`s Barbeque',
        description:
          'It is okay but it is a fast casual place not a place for great barbecue which I did not know when I decided to go.',
        kind: 'Barbecue restaurant',
        area: 'East Village, Manhattan',
        visits: '1',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7275899, -73.9886167],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Milano Market',
        description:
          'They identify as an italian restaurant but it is really an Italian bodega... Their sandwinches is what they are known for and it was a good sandwich. Would recommend it is a solid option and it is also close to all the museum of the Upper East Side.',
        kind: 'Italian Restaurant',
        area: 'Upper East Side, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7807599, -73.9528672],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Via Carota',
        description:
          'Great Italian restaurant! The negroni was good, and their pasta is really good but the rabbit dish it is interesting but the bread that comes with the rabbit dish [CONIGLIO FRITTO] is top notch! I will go back to this place just to get more of that bread, I do not know if they have as a separate dish that is not the CONIGLIO FRITTO but it is definetely a must try. Do not wait in line for hours for this place tho... Just try something else.',
        kind: 'Italian Restaurant',
        area: 'Greenwich Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7331152, -74.0037462],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'I Sodi',
        description:
          'I have not been here yet but this place together with Via Carota are suppose to be the best italian restaurants.',
        kind: 'Italian Restaurant',
        area: 'Greenwich Village, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7333925, -74.004978],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'La Pecora Bianca Meatpacking',
        description: 'Good Food. I liked it and my girlfriend liked it too!',
        kind: 'Italian Restaurant',
        area: 'Meatpacking District, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7395447, -74.0078923],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'burger joint',
        description: 'I have not been here yet.',
        kind: 'Burger Restaurant',
        area: 'Midtown, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7642155, -73.9785651],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Emily: West Village',
        description:
          'This place has best burger I have tried in New York City PERIOD! it is really good.',
        kind: 'Pizza Restaurant',
        area: 'Greenwich Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7293737, -74.0038588],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Old Fashion Café',
        description: 'I have not been here yet.',
        kind: 'Restaurant',
        area: 'SoHo, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7257391, -74.0018077],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Bubby`s',
        description:
          'okay brunch spot, cool for the vibe, okay for the food... can`t really mess up american breakfast foods lol',
        kind: 'American Restaurant',
        area: 'Tribeca, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7198475, -74.0083981],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: '456 New Shanghai',
        description: 'Really good, and cheap chinese food!',
        kind: 'Chinese Food',
        area: 'Chinatown, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7162621, -73.9983186],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Carnegie Diner & Cafe',
        description:
          'Great diner for those going to carnegie hall after. Do not go into a show with an empty stomach.',
        kind: 'Diner',
        area: 'Central Park South, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7657789, -73.9802301],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Havana Central Times Square',
        description:
          'Great cuban spot surrounded by touristy places... This is kind of touristy too but do not worry it is good.',
        kind: 'Cuban Restaurant',
        area: 'Times Square, manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.758311, -73.9841574],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Café Habana',
        description: 'I have not been here yet.',
        kind: 'Cuban Restaurant',
        area: 'SoHo, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7228876, -73.994214],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Oiji Mi',
        description: 'I have not been here yet.',
        kind: 'Korean restaurant',
        area: 'Flatiron, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7397297, -73.9924342],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Khe-Yo',
        description:
          'I really liked this restaurant the food is tasty, with a good balance of flavors, and uniqueness to it... to me this place has a "je nais se quois" to it. The atmosphere is awesome, and the decor. The Waiter are nice and attentive, and a must try is the vietnamese coffee.',
        kind: 'Laotian restaurant',
        area: 'Tribeca, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7169082, -74.0086282],
      },
    },

    /// ////////////////////////////////////////////////
    /// ////////////         Queens      ///////////////
    /// ////////////////////////////////////////////////
    {
      type: 'Feature',
      properties: {
        name: 'Compton`s',
        description: 'This place has the best sandwiches I have had period!',
        kind: 'Sandwich',
        area: 'Astoria, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7708399, -73.9301794],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Sugar Freak',
        description: 'New Orleans style food but in astoria. It`s great!',
        kind: 'Creole Restaurant',
        area: 'Astoria, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7645616, -73.9160715],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'El Rey del Taco to go',
        description: 'Good and Tasty tacos.',
        kind: 'Mexican Restaurant',
        area: 'Astoria, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7639733, -73.9222881],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Notable',
        description: 'They have great Sandwiches.',
        kind: 'Jamaican Restaurant',
        area: 'Astoria, Queens',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7685582, -73.924592],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'KAL',
        description: 'I like this spot in Astoria.',
        kind: 'Korean Restaurant',
        area: 'Astoria Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7658007, -73.9186187],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Ovelia',
        description:
          'Great greek restaurant of astoria. The owners are sweet and attentive and the food was delicious. What else would you want?',
        kind: 'Greek restaurant',
        area: 'Astoria, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7659071, -73.9187192],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Drunken Chicken',
        description:
          'Their fried rice and Korean style fried chicken are okay not my faves.',
        kind: 'Asian Fusion Restaurant',
        area: 'Astoria, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.762719, -73.927572],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Enthaice Thai Kitchen',
        description:
          'Me and my girlfriend got the quintisential Thai food... PAD THAI, and PAD SEA EW and... Drum Rolls  🥁...🥁 It was really good! I liked it and would get it again, and again. ',
        kind: 'Thai Restaurant',
        area: 'Astoria, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7631348, -73.9212747],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Junkie Burger',
        description:
          'This burger place goes crazy! Their burgers are good and interesting, the sauce is really good but I do not think this is the best burger joint I have been so far. Also they are only open Thursday to Sunday from 5pm to 10pm so you gotta be dedicated to cause. Now their prices... their burger prices are not that bad but their milkshakes are a different story lol. Would I go again? maybe',
        kind: 'Fast Food',
        area: 'Astoria, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.762812, -73.9275407],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Omonia Cafe',
        description:
          'This is a greek style diner, they call themselves a Cafe but I think a more accurate description would be diner. Their food is good, their coffee and hot chocolate are good too. This is a chill and nice spot to get some good food.',
        kind: 'Diner',
        area: 'Astoria, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.761184, -73.923965],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Romanian Garden',
        description: 'I have not been here yet.',
        kind: 'Romanian Restaurant',
        area: 'Sunnyside, Queens',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7450162, -73.9207939],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Dani`s House of Pizza',
        description:
          'I have not been here yet but this is supposed to be the best pizza place in New York City according to a friend of mine.',
        kind: 'Fast Food',
        area: 'Kew Gardens, Queens',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.708981, -73.830536],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Taverna Kyclades',
        description: 'I have not been here yet.',
        kind: 'Greek restaurant',
        area: 'Astoria, Queens',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7743819, -73.9079475],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Sal, Kris & Charlie`s Deli',
        description: 'I have not been here yet.',
        kind: 'Fast Food',
        area: 'Astoria, Queens',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.773226, -73.9115696],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Burger Club',
        description:
          'Restaurant that has a menu full of different kind of burger, really good!',
        kind: 'Burger Restaurant',
        area: 'Astoria, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7663226, -73.9206369],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Bund on Broadway',
        description:
          'The food here is really good! Really tasty, and wonderful. Would definetely go again.',
        kind: 'Chinese Restaurant',
        area: 'Astoria, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7631622, -73.9281626],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'District Saigon',
        description: 'I have not been here yet.',
        kind: 'Vietnamese Restaurant',
        area: 'Astoria, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7596087, -73.9200308],
      },
    },
    /// ////////////////////////////////////////////////
    /// ///////////         Brooklyn      ///////////////
    /// ////////////////////////////////////////////////

    {
      type: 'Feature',
      properties: {
        name: 'Amaranto',
        description: 'Cool mexican spot in bushwick new york.',
        kind: 'Mexican restaurant',
        area: 'Bushwick, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7031479, -73.9219607],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Cafe Mogador Williamsburg',
        description: 'Great Moroccan food. I love it.',
        kind: 'Moroccan Restaurant',
        area: 'Williamsburg, Brooklyn',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7197416, -73.9599664],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Surf Bar',
        description:
          'The most crazy restaurant I have been in the city period. I love it. The floor is full of sand and the rooftop is cover by surfboards like... I do not know what to say. The food is good too which surprise me because I thought peeps would go here for the atmosphere but nope! The food is good, the interior design is cool, and the drinks a great. 10/10',
        kind: 'Seafood Restaurant',
        area: 'Williamsburg, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7197416, -73.9599664],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'SEA',
        description:
          'I loved the skylight that they had in the middle of the floor honestly.',
        kind: 'Thai Restaurant',
        area: 'Williamsburg, Brooklyn',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7181195, -73.9599838],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Boran',
        description:
          'Hot Thai restaurant in Red Hook, brooklyn hot because my meal burned my tongue.',
        kind: 'Thai Restaurant',
        area: 'Red Hook, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6781926, -73.9980566],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: '12 Chairs Café',
        description: 'Great israeli restaurant, Worth it.',
        kind: 'Israeli Restaurant',
        area: 'Williamsburg, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7144908, -73.9652118],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Santa Salsa',
        description: 'I have had it a couple times and it is cool.',
        kind: 'Venezuelan restaurant',
        area: 'Bushwick, Brooklyn',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.705545, -73.922318],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Anthony & Son Panini Shoppe',
        description: 'I have not been here yet.',
        kind: 'Fast Food',
        area: 'Greenpoint, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.717935, -73.9451433],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Arepa Lady',
        description: 'I have not been here yet.',
        kind: 'Colombian restaurant',
        area: 'Downtown Brooklyn, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.690991, -73.982917],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Aska',
        description: 'I have not been here yet.',
        kind: 'Scandinavian Restaurant',
        area: 'Williamsburg, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7122907, -73.966422],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Fonda',
        description:
          'Great tacos, and drinks would definetely go back again if I am in park slope.',
        kind: 'Mexican Restaurant',
        area: 'Park Slope, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6636067, -73.9844925],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Miss Ada',
        description: 'I have not been here yet.',
        kind: 'Mediterranean restaurant',
        area: 'Clinton Hill, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.689451, -73.9724167],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Bergen Bagels',
        description: 'I have not been here yet.',
        kind: 'Bagel shop',
        area: 'Boerum Hill, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6809719, -73.9747959],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Milk & Roses',
        description: 'I have not been here yet.',
        kind: 'Italian Restaurant',
        area: 'Greenpoint, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7374258, -73.9550672],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Llama Inn',
        description: 'I have not been here yet.',
        kind: 'Peruvian Restaurant',
        area: 'Williamsburg, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7166429, -73.9505713],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'East Hae',
        description: 'I have not been here yet.',
        kind: 'Korean restaurant',
        area: 'Williamsburg, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7184793, -73.9606902],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Peppa`s',
        description: 'I have not been here yet.',
        kind: 'Chicken restaurant',
        area: 'Flatbush, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6549698, -73.9599139],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Local Press',
        description: 'I have not been here yet.',
        kind: 'Fast Food',
        area: 'Ozone Park, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6815177, -73.8469223],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'DuMont Burger',
        description:
          'I have not been here yet but I heard that their burgers are a delight to be had.',
        kind: 'Fast Food',
        area: 'Williamsburg, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.713646, -73.9620345],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'So Pho 88',
        description: 'I have not been here yet.',
        kind: 'Vietnamese restaurant',
        area: 'Williamsburg, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7136206, -73.9619943],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Farm to People',
        description:
          'This is one of the most unique restaurants that i have been to in the city. This place is a Restaurant, Brewery, and Grocery store warehouse so you know your food will be fresh, and your beers will be unique. Which they clearly are I tried a strawberry infused beer and it was something to try but to sour for my preference haha. It is a huge space so big parties or get together can happen and their front-yard has many tables for those summer days.',
        kind: 'Restaurant',
        area: 'Bushwick, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7052478, -73.9268612],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Queen',
        description:
          'Great restaurant with Mediterranean food. It is a great place to get tasteful, and healhty meals.',
        kind: 'Mediterranean restaurant',
        area: 'Bushwick, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7060549, -73.9224135],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Fandi Mata',
        description:
          'I have not been here yet but this place looks really cool, it looks like a garden and they also become a bar / club at night which is interesting.',
        kind: 'Restaurant',
        area: 'Greenpoint, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7188547, -73.9492803],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Ainslie',
        description:
          'Great Italian restaurant. the pizza, pasta and drinks are really good!.',
        kind: 'Italian restaurant',
        area: 'Williamsburg, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.712398, -73.9520449],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Vera Cruz',
        description:
          'The food is bland, and not so great... The drinks tho they are good! I would only go back for the frozen drinks and the nachos and guac.',
        kind: 'Mexican Restaurant',
        area: 'Williamsburg, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7173639, -73.9579825],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Beco',
        description: 'Great restaurant, and bar. Their drinks are really good!',
        kind: 'Brazilian Restaurant',
        area: 'Williamsburg, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7183554, -73.9504451],
      },
    },

    /// ////////////////////////////////////////////////
    /// ////////         New York, NY       /////////////
    /// ////////////////////////////////////////////////
    {
      type: 'Feature',
      properties: {
        name: 'Pizza Barn',
        description: 'I have not been here yet.',
        kind: 'Fast Food',
        area: 'Yonkers, New York',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.9203563, -73.8676098],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Mis Antojitos Juice Bar',
        description:
          'Their say it all! I always crave their stuff for no reason lol',
        kind: 'Fast Food',
        area: 'Bronx, NY',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8313091, -73.8749071],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Flame Bronx',
        description: 'I have not been here yet.',
        kind: 'Asian Fusion Restaurant',
        area: 'Riverdale, Bronx',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8827421, -73.9015577],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'La Masa',
        description:
          'Must try of this place are: "Bandeja paisa", "Callejera", and "Montañero" those are really good! ',
        kind: 'Colombian restaurant',
        area: 'Morris Park, Bronx',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8480168, -73.8559589],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Emilio`s of Morris Park',
        description:
          'Their vodka pizza is **Cheff Kiss** everything else is just okay.',
        kind: 'Fast Food',
        area: 'Morris Park, Bronx',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8490174, -73.854695],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Lin’s Asian Cuisine',
        description: 'I only ate bento boxes and pad thai from this place.',
        kind: 'Asian Restaurant',
        area: 'Morris Park, Bronx',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8427071, -73.8537226],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Don Emilio Diner',
        description:
          'Really, Really good dominican food but I guess that is the specialty food of the bronx or anywhere north of 125st. Emilio (The Owner) is always there taking care of peeps and talking to you while serving, he also used to cook mostly in the morning but he stopped as he is getting older and leaving the kitchen to others. Go support Emilio if you are in the area.',
        kind: 'Dominican restaurant',
        area: 'Castle Hill, Bronx',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8346396, -73.8521896],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Marisco Centro',
        description:
          'They call themselves Seafood restaurant but I think a more accurate description is Dominican because those are their main dishes seafood is not the main thing that they serve lol. But this is the only place that my dad would eat fish soup from and he is really picky with his soup.',
        kind: 'Dominican Restaurant',
        area: 'Castle Hill, Bronx',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8314147, -73.850663],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Pasquale`s Rigoletto',
        description: 'I have not been here yet.',
        kind: 'Italian restaurant',
        area: 'Forham, Bronx',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8538646, -73.8892456],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Empanadas RD',
        description:
          'This place has one of the best empanadas in NYC in my opinion.',
        kind: 'Fast Food',
        area: 'Bronx, New York',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8126778, -73.8817469],
      },
    },
    /// ////////////////////////////////////////////////
    /// ////////        United States       /////////////
    /// ////////////////////////////////////////////////
    {
      type: 'Feature',
      properties: {
        name: 'Alex`s Restaurant',
        description:
          'It suppose to be the first restaurant of the town... I did not fact check that tho... food is okay just like you like it from a diner.',
        kind: 'Diner',
        area: 'Poughkeepsie, NY',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.7039015, -73.9287277],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: '100 Montaditos',
        description:
          'Great spanish restaurant in wynwood or midtown miami. Their apperitifs are made so that you lick your fingers. But... I am bias.',
        kind: 'Spanish Restaurant',
        area: 'Midtown, Miami',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [25.8078194, -80.1934824],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Runas Peruvian Cuisine',
        description: 'Their ceviche is **Cheff Kisses**',
        kind: 'Peruvian restaurant',
        area: 'Hollywood, Miami',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [26.0131647, -80.1488042],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Enriqueta`s Sandwich Shop',
        description:
          'Loved their sandwiches and breakfast food! And supposebly the jonas brothers has been here before and eaten. If you are in midtwon miami comes',
        kind: 'Diner',
        area: 'Midtown, Miami',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [25.8038989, -80.1914842],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Butcher Shop Gastro Pub',
        description: 'Decent spot for burgers.',
        kind: 'American restaurant',
        area: 'Downtown Miami, Miami',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [25.7732729, -80.1895347],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Cantina La Veinte',
        description:
          'Fine Dining? With mexican Food on the waterfront of Miami.',
        kind: 'Mexican restaurant',
        area: 'Brickel, Miami',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [25.7684606, -80.1883645],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Bebo`s Café',
        description: 'I have not been here yet.',
        kind: 'Puerto Rican restaurant',
        area: 'San Juan, Puerto Rico',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4517873, -66.0627088],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'MiKro Depot',
        description:
          'I had poutine at these place for the first time and i feel in love with it <3 ',
        kind: 'Canadian Restaurant',
        area: 'Hamden, CT',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.4148877, -72.9035541],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Kouzina',
        description: 'good greek food from an authentic greek owner.',
        kind: 'Greek Restaurant',
        area: 'Stamford, Connecticut',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.0529477, -73.5414886],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Pura Vida South of Fifth',
        description: 'I have not been here yet.',
        kind: 'Casual Dining',
        area: 'Miami Beach, Florida',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [25.770274, -80.1353594],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Fogo de Chão Brazilian Steakhouse',
        description: 'I have not been here yet.',
        kind: 'Brazilian Restaurant',
        area: 'Miami Beach, Florida',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [25.769632, -80.1366797],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Smitty`s Market',
        description:
          'I have not been here yet but I heard is one of the best BBQ places around Austin.',
        kind: 'Barbecue restaurant',
        area: 'Austin, Texas',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [29.8836284, -97.6709195],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Lazy Bear',
        description: 'I have not been here yet.',
        kind: 'American Restaurant',
        area: 'San Francisco, California',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [37.7604119, -122.4197156],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Saison',
        description: 'I have not been here yet.',
        kind: 'American Restaurant',
        area: 'San francisco, California',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [37.7795228, -122.392269],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Californios',
        description: 'I have not been here yet.',
        kind: 'Mexican Restaurant',
        area: 'San Francisco, California',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [37.7714672, -122.4128723],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Campton Place Restaurant',
        description: 'I have not been here yet.',
        kind: 'Fine Dining',
        area: 'San Francisco, California',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [37.7892053, -122.4067242],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Acquerello',
        description: 'I have not been here yet.',
        kind: 'Italian Restaurant',
        area: 'San Francisco, California',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [37.7915966, -122.421467],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Commis',
        description: 'I have not been here yet.',
        kind: 'Fine Dinig',
        area: 'Oakland, California',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [37.8247083, -122.2548833],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Baume',
        description: 'I have not been here yet.',
        kind: 'French Restaurant',
        area: 'Palo Alto, California',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [37.428204, -122.1430771],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Atelier Crenn',
        description: 'I have not been here yet.',
        kind: 'French Restaurant',
        area: 'San Francisco, California',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [37.7983315, -122.4359605],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Benu',
        description: 'I have not been here yet.',
        kind: 'American Restaurant',
        area: 'San Francisco, California',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [37.785452, -122.399036],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'La Natural',
        description: 'I have not been here yet.',
        kind: 'Fast Food',
        area: 'Little Haiti, Miami',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [25.841881, -80.2005808],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Licking Miami Gardens',
        description: 'I have not been here yet.',
        kind: 'Soul food restaurant',
        area: 'Miami Gardens, Florida',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [25.9352887, -80.2447099],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Belle`s Bagels',
        description: 'I have not been here yet.',
        kind: 'Bagel shop',
        area: 'Los Angeles, California',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [34.1210887, -118.2061738],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Piso Viejo Bar & Restaurant',
        description: 'I have not been here yet.',
        kind: 'Puerto Rican Restaurant',
        area: 'San Juan, Puerto Rico',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4511885, -66.0562117],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'ASTRA',
        description: 'I have not been here yet.',
        kind: 'Rooftop - Mediterranean Restaurant',
        area: 'Wynwood, Miami',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [25.7968628, -80.1986327],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'El Techo',
        description: 'I have not been here yet.',
        kind: 'Latin American restaurant',
        area: 'San Francisco, California',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [37.756576, -122.4190831],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'NOLA Caye',
        description:
          'This place is kind of hard to describe but I will try my best... It is a coffee shop style restaurant that only serve brunch / breakfast / light eats. Even though it is a restaurant it feels more like a cafe and bar and the cokctails are really good therefore that is what it is for me a cafe bar. I like it, it was quite nice and cool.',
        kind: 'Restaurant',
        area: 'New Orleans, LA',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [29.9451723, -90.0742787],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Pêche Seafood Grill',
        description:
          'The drinks are great but you would come here mostly for the seafood which is pretty good and really fresh. Really big space to for big parties and plenty of bar space for both drinks and oysters. If you are in NOLA and likes seafood gives pêche a try!',
        kind: 'Seafood Restaurant',
        area: 'New Orleans, LA',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [29.945161, -90.0691139],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Mother`s Restaurant',
        description:
          'This is supposed to be  the place to get po boys together with verti marte. Which one is better? I do not know both are really good. Just keep in mind that there might be a long line.',
        kind: 'Po Boys Restaurant',
        area: 'New Orleans, LA',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [29.9490443, -90.0671693],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Ruby Slipper Cafe',
        description:
          'A place to try southern breakfast! I guess this is the south so every place might be similar... but my southern breakfast was really good thanks for asking.',
        kind: 'Brunch Restaurant',
        area: 'New Orleans, LA',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [29.9509141, -90.0673505],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Daisy Dukes French Quarter',
        description:
          'Here I got a breakfast of champions Aligator sausage Omellete! It was pretty interesting but it did not felt weird at all. I guess that was just my mind trying to get me to get something else and stay in my comfort zone.',
        kind: 'Breakfast Restaurant',
        area: 'New Orleans, LA',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [29.9531331, -90.0678391],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Verti Marte',
        description: 'Po Boys townsquare.',
        kind: 'Deli',
        area: 'New Orleans, LA',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [29.9620721, -90.061192],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Juicy Dumpling in Chinatown',
        description: 'I have not been here yet.',
        kind: 'Dumpling Restaurant',
        area: 'Toronto, Canada',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [43.6526034, -79.3988045],
      },
    },
    /// ////////////////////////////////////////////////
    /// ////////        Dominican Republic      /////////////
    /// ////////////////////////////////////////////////

    {
      type: 'Feature',
      properties: {
        name: 'Food Truck Town',
        description:
          'Full of food trucks that are full of good foods. This food truck villa is literally in the middle of city so it is pretty convinient. ',
        kind: 'Fast Food',
        area: 'Naco, Santo Domingo',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4618018, -69.9386083],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'SBG KITCHEN',
        description:
          'Fine Dining in the DR is not that expensive compare to NYC.',
        kind: 'Fine Dining',
        area: 'El millon, Santo Domingo',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4507231, -69.9525381],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Food Inc',
        description:
          'Burgers and more crazy recipes done by the chef here so if you would like some crazy looking, tasting come to this place by the romulo betancourt.',
        kind: 'Fast Food',
        area: 'Bella Vista, Santo Domingo',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4532601, -69.9484365],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Peperoni',
        description: 'I have not been here yet.',
        kind: 'Italian Restaurant',
        area: 'Evarista Morales, Santo Domingo',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4690451, -69.934911],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'LILA - Modern Cuisine',
        description: 'I have not been here yet.',
        kind: 'American Restaurant',
        area: 'Santo Domingo, Dominican Republic',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4666429, -69.9344991],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Kachao',
        description: 'I have not been here yet.',
        kind: 'Fast Food',
        area: 'Bella Vista, Santo Domingo',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4569472, -69.9400183],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Morgan`s by Cleaner Studio',
        description: 'I have not been here yet.',
        kind: 'Casual Dining',
        area: 'Bella Vista, Santo Domingo',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4606734, -69.9407635],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Neptuno`s Club Restaurant',
        description: 'I have not been here yet.',
        kind: 'Carribeam Fine Dining',
        area: 'Boca Chica, Santo Domingo',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4484959, -69.6028969],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Boca Marina',
        description: 'I have not been here yet.',
        kind: 'Fine Dining',
        area: 'Boca Chica, Santo Domingo',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4479308, -69.6016654],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Laurel',
        description: 'I have not been here yet.',
        kind: 'Fine Dining',
        area: 'Piantini, Santo Domingo',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4722341, -69.9350936],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'El Mesón de la Cava',
        description: 'I have not been here yet.',
        kind: 'Fine Dining',
        area: 'Bella Vista, Santo Domingo',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4531488, -69.9332945],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Kachao Kitchen Arroyo Hondo',
        description: 'I have not been here yet.',
        kind: 'Fast Food',
        area: 'Arroyo Hondo, Santo Domingo',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4932323, -69.9373452],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Maraca',
        description: 'I have not been here yet.',
        kind: 'Casual Dining',
        area: 'Zona Colonial, Santo Domingo',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4718722, -69.8874841],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Winston`s Grill & Patio',
        description: 'I have not been here yet.',
        kind: 'Casual Dining',
        area: 'Evarista Morales, Santo Domingo',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4722136, -69.941147],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'SBG Sophia`s Bar & Grill',
        description: 'I have not been here yet.',
        kind: 'Fine Dining',
        area: 'Piantini, Santo  Domingo',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4670245, -69.9341379],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Adrian Tropical',
        description:
          'Great restaurant with views of the Caribeam Sea and freat food, this restaurant is kind of like a starter pack to dominican cusine, it is a must go.',
        kind: 'Dominican Restaurant',
        area: 'Santo Domingo, Republica Dominicana',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4602861, -69.9033676],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'El MariScon',
        description: 'I have not been here yet.',
        kind: 'Seafood restaurant',
        area: 'El Millon, Santo Domingo',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4577473, -69.9513509],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Viralata',
        description: 'I have not been here yet.',
        kind: 'Fast Food',
        area: 'Bella Vista, Santo Domingo',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4577269, -69.933872],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Boga Boga',
        description: 'I have not been here yet.',
        kind: 'Mediterranean restaurant',
        area: 'La Esperilla, Santo Domingo',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4643819, -69.9251032],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Pastelería Y Panadería Los Trigales',
        description: 'Here I always got the pastelitos and croissants 🤌🏽 ',
        kind: 'Bakery',
        area: 'Santo Domingo, Republica Dominicana',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4709072, -69.9617951],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'El Duke',
        description:
          'Coño las tostadas que el duke hace son para morirse! por 30 pesos comes como un rey donde el y te quedas con ganas de mas solo ten cuidado porque por ahi es caliente.',
        kind: 'Fast Food',
        area: 'Santo Domingo, Republica Dominicana',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4860823, -69.9614339],
      },
    },

    /// ////////////////////////////////////////////////
    /// ////////       Latin America     /////////////
    /// ////////////////////////////////////////////////
    {
      type: 'Feature',
      properties: {
        name: 'El 123',
        description:
          'I have not been here yet but it is a cool Thai restaurant with a gallery, and a store each one of them located on a different floor.',
        kind: 'Thai restaurant',
        area: 'Mexico City, Mexico',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [19.4332844, -99.1494128],
      },
    },

    /// ////////////////////////////////////////////////
    /// ////////       North America      /////////////
    /// ///////////////////////////////////////////////

    {
      type: 'Feature',
      properties: {
        name: 'e11even',
        description: 'I have not been here yet.',
        kind: 'Restaurant',
        area: 'Toronto, Canada',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [43.6427748, -79.3811295],
      },
    },

    /// ////////////////////////////////////////////////
    /// ////////        Asia     /////////////
    /// ////////////////////////////////////////////////
    {
      type: 'Feature',
      properties: {
        name: 'Warajiya',
        description:
          'I have not been here yet but this is supposed to be the oldest restaurant and business of the enitre world! It has been in business for at least 1000 years some peeps say it is longer some say it is shorter but the paper trail starts at about 1000 years.',
        kind: 'Unagi restaurant',
        area: 'Kyoto, Japan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [34.9893591, 135.7705125],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Propaganda Vietnamese Bistro',
        description: 'I have not been here yet.',
        kind: 'Vietnamese restaurant',
        area: 'District 1, Ho Chi Minh City, Vietnam',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [10.7787789, 106.6982206],
      },
    },
    /// ////////////////////////////////////////////////
    /// ////////       Europe    /////////////
    /// ////////////////////////////////////////////////

    {
      type: 'Feature',
      properties: {
        name: 'ÓX',
        description: 'I have not been here yet.',
        kind: 'Scandinavian Restaurant',
        area: 'Reykjavík, Iceland',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [64.1453857, -21.9280034],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Restaurant La Baie des Singes',
        description: 'I have not been here yet.',
        kind: 'Mediterranean Restaurant',
        area: 'Marseille, France',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [43.213992, 5.338046],
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
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [],
      },
    },
  ],
};

export default Food;
