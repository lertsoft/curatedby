const Food = {
  type: 'FeatureCollection',
  features: [
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
        name: 'Pizza Barn',
        description: 'I have not been here yet.',
        kind: 'Fast Food',
        area: 'Yonkers, New York',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.9203736, -73.8697598],
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
        coordinates: [40.7144856, -73.9992632],
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
        coordinates: [40.7587252, -73.988414],
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
        coordinates: [40.7214575, -73.9810942],
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
        coordinates: [40.7075225, -73.9331828],
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
        coordinates: [40.7319558, -73.9854781],
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
        name: 'Amaranto',
        description: 'Cool mexican spot in bushwick new york.',
        kind: 'Mexican restaurant',
        area: 'Bushwick, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7030909, -73.9224975],
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
        coordinates: [40.7784728, -73.9797464],
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
        coordinates: [40.6790244, -73.9948259],
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
        coordinates: [40.7223109, -74.0138321],
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
        coordinates: [40.7571457, -73.9678294],
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
        coordinates: [40.7285199, -73.9892737],
      },
    },
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
        coordinates: [41.7038783, -73.9308954],
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
        coordinates: [40.7156656, -73.9988928],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Tacombi',
        description: 'Okeyish chain for mexican food... pretty okay, i guess.',
        kind: 'Mexican Restaurant',
        area: 'Greenwich Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7271108, -74.0211278],
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
        coordinates: [40.7287667, -74.001769],
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
        coordinates: [40.7573214, -74.0051635],
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
        coordinates: [40.7282142, -73.9843493],
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
        coordinates: [40.804197, -73.956285],
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
        name: 'Kouzina',
        description: 'good greek food in astoria.',
        kind: 'Greek Restaurant',
        area: 'Astoria, Queens',
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
        coordinates: [40.7323017, -73.9895357],
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
        name: 'Runas Peruvian Cuisine',
        description: 'Their ceviche is **Cheff Kisses**',
        kind: 'Peruvian restaurant',
        area: 'Hollywood, Miami',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [26.0034924, -80.1327928],
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
        coordinates: [40.727031, -74.1264487],
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
        name: 'Dokodemo',
        description:
          'This is a casual dining japanese restaurant. I liked it but again it is fast casual food. East Village.',
        kind: 'Japanese restaurant',
        area: 'East Village, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7264287, -73.9918806],
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
        coordinates: [40.7271157, -73.9947989],
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
        coordinates: [41.4150039, -72.9056848],
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
        name: 'Rosemeray`s',
        description:
          'One of my fave italian restaurant and this place is even approved by my mom.',
        kind: 'Italian Restaurant',
        area: 'Greenwich Village, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7348368, -74.0173104],
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
        coordinates: [40.7475891, -73.989107],
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
        name: 'LILA - Modern Cuisine',
        description: 'I have not been here yet.',
        kind: 'American Restaurant',
        area: 'Santo Domingo, DR',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.4669959, -69.9372118],
      },
    },
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
        coordinates: [64.1452958, -21.930149],
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
        description: 'I have not been here yet.',
        kind: 'Mexican Restaurant',
        area: 'Hells Kitchen, Manhattan',
        visits: '0',
        visited: false,
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
        area: 'Nolita',
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
        area: '',
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
        description: 'I have not been here yet.',
        kind: 'Casual Dining',
        area: 'Grammercy, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.742513, -73.984368],
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
        name: 'Fonda',
        description: 'I have not been here yet.',
        kind: 'Mexican Restaurant',
        area: 'Park Slope, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.663619, -73.98677],
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
        name: 'Miss Ada',
        description: 'I have not been here yet.',
        kind: 'Mediterranean restaurant',
        area: 'Clinton Hill, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6885818, -73.9720043],
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
        name: '',
        description: 'I have not been here yet.',
        kind: '',
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

export default Food;
