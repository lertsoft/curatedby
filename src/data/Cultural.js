/// ////////////////////////////////////////////////
/// ///////   Museum & Galleries    ////////////////
/// ////////////////////////////////////////////////
const cultural = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'David Zwirner',
        description:
          'Gallery in Chelsea were some prominent artist has shown their work. Such as, Yayoi Kusama.',
        kind: 'Gallery',
        area: 'Chelsea, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.745866, -74.006985],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Hauser & Wirth',
        description:
          'Interesting modern art gallery. Not much of an opinion besides something general.',
        kind: 'Gallery',
        area: 'Chelsea, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7476497, -74.0067358],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Pace Gallery',
        description:
          'Huge New York gallery. They are the most popular and have the most galleries in the city. They show mostly popular artist, at least when I visited.',
        kind: 'Gallery',
        area: 'Chelsea, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.749637, -74.0050472],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Marian Goodman Gallery',
        description: 'I have not been here yet.',
        kind: 'Gallery',
        area: 'Midtown, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7632792, -73.9756657],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Cooper Hewitt Smithsonian Design Museum',
        description:
          'Pretty cool modern art museum with experimentales and interactive exhibits.',
        kind: 'Musuem',
        area: 'Upper East Side, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7843958, -73.9578732],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Gagosian',
        description:
          'Another big and popular gallery brand just as pace, this gallery brand has a bunch of galleries all over the city.',
        kind: 'Gallery',
        area: 'Chelsea, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7467546, -74.0065002],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Solomon R. Guggenheim Museum',
        description: 'I have never been here... I know, I know.',
        kind: 'Museum',
        area: 'Upper East Side, Manhattan',
        visits: '0',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7829796, -73.9589706],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Benrubi Gallery',
        description: 'I have not been here yet.',
        kind: 'Gallery',
        area: 'Chelsea, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7465935, -74.0067876],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Danziger Gallery',
        description: 'I have not been here yet.',
        kind: 'Gallery',
        area: 'Chelsea, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7751289, -73.9647057],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'International Center of Photography Museum',
        description:
          'I have not been here yet. But it is in my list of must go! Maybe because I am a photographer.',
        kind: 'Museum',
        area: 'Lower East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7179913, -73.9886867],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Yossi Milo Gallery',
        description: 'I have not been here yet.',
        kind: 'Gallery',
        area: 'Chelsea, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7487662, -74.0036157],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'New Museum',
        description:
          'This museum cover contemporary issues and has artist from our day and age... Artist that are alive. It is a must visit for people visiting the city.',
        kind: 'Museum',
        area: 'Lower East Side, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7223376, -73.9928905],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Noguchi Museum',
        description:
          'Cool small museum in Astoria, Queens. It has lots of sculptures and for some reason it gave me interior designs inspirations. I would continue going as I am fairly interested in Japanese design, and culture.',
        kind: 'Museum',
        area: 'Astoria, Queens',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7487662, -74.0036157],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Museum of the Moving Image',
        description:
          'If you love photography, films, and camera gear this museum is a must go! It has exhibits for a lot of different movies, and shows. They also have a lot of first... ie. First camera, first video camera, first, animated shows, first set, and on and on.',
        kind: 'Museum',
        area: 'Astoria, Queens',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7563454, -73.9239496],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'New York Transit Museum',
        description: 'I have not been here yet.',
        kind: 'Museum',
        area: 'Downtown Brooklyn, Brooklyn',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.69057, -73.9900678],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Edgar Allan Poe Cottage',
        description:
          'I have not been here yet. Last home (1846–49) of the famous poet & author.',
        kind: 'Museum',
        area: 'Bronx, New York',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8650401, -73.8946978],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'The Andy Warhol Museum',
        description: 'I have not been here yet.',
        kind: 'Museum',
        area: 'Pittsburgh, Pennsylvania',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.4483755, -80.0024907],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Society of Illustrators',
        description: 'I have not been here yet.',
        kind: 'Museum',
        area: 'Upper East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7648331, -73.9668335],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Color Factory New York',
        description: 'I have not been here yet.',
        kind: 'Museum',
        area: 'Meatpacking District, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.725773, -74.0053337],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Bronx Museum of the Arts',
        description: 'I have not been here yet.',
        kind: 'Museum',
        area: 'Bronx, New York',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8311761, -73.9197024],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Museum of Modern Art',
        description:
          'MoMA is a must go museum on Manhattan, The terrace cafe is also worth going because of the views and on a summer day it is breezy and nice. Exhibits wise MoMA has some of my faves paintings and i try to go there to get inspire for my photography.',
        kind: 'Museum',
        area: 'Midtown, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7614327, -73.9776216],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Fotografiska Museum',
        description:
          'My favorite photography museum in the city, and anywhere honestly! I love fotografiska, I have been there many times and i try to go every three to six months for new exhibits, and see what others photographers photograph.',
        kind: 'Museum',
        area: 'Grammercy, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7392209, -73.9867219],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Ellis Island Hospital',
        description: 'I have not been here yet.',
        kind: 'Museum',
        area: 'Ellis Island, NYC',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.6969677, -74.0463896],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Frick Collection',
        description: 'I have not been here yet.',
        kind: 'Museum',
        area: 'Upper East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7710857, -73.9673861],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Intrepid Sea, Air & Space Museum',
        description: 'I have not been here yet.',
        kind: 'Museum',
        area: 'Hudson Yards, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7645266, -73.9996076],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Jacques Marchais Museum of Tibetan Art',
        description: 'I have not been here yet.',
        kind: 'Museum',
        area: 'Staten Island, NY',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.5829185, -74.1393314],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Jewish Museum',
        description: 'I have not been here yet.',
        kind: 'Museum',
        area: 'Financial District, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.785334, -73.957351],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'El Museo del Barrio',
        description:
          'An awesome museum about latin american heritage. It focuses mostly on upper east side / East harlem.',
        kind: 'Museum',
        area: 'East Harlem, Manhattan',
        visits: '2',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7931183, -73.9514063],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Museum of the City of New York',
        description:
          'A must go museum for people that would like to learn more about the history of the city of new york. It goes from the beggining beggining to the future and were it is heading.',
        kind: 'Museum',
        area: 'East Harlem, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7924939, -73.9519089],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Whitney Museum of American Art',
        description:
          'Really cool museum and pretty popular too in the meatpacking district.',
        kind: 'Museum',
        area: 'Meatpacking District, Manhattan',
        visits: '3',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7395877, -74.0088629],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Magazzino Italian Art',
        description:
          'This art center around cold spring looks awesome but I have to see it and experience it with my own eyes.',
        kind: 'Art Center',
        area: 'Cold Spring, NY',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.429749, -73.914816],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Storm King Art Center',
        description:
          'A stonehenge but for new yorkers. I have not been here yet.',
        kind: 'Art Center',
        area: 'Storm King, NY',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [41.4207619, -74.065351],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Hole',
        description:
          'It is a cool and popping gallery in the village with contemporary arts.',
        kind: 'Gallery',
        area: 'East Village, Manhattan',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7251024, -73.992701],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'The Met Cloisters',
        description: 'I have not been here yet.',
        kind: 'Museum',
        area: 'Inwood, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8648628, -73.9317274],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Palais de Tokyo',
        description: 'I have not been here yet.',
        kind: 'Museum',
        area: 'Paris, France',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [48.8642031, 2.2970914],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Vizcaya Museum & Gardens',
        description: 'I have not been here yet.',
        kind: 'Museum',
        area: 'Miami, Florida',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [25.7443866, -80.2104747],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'PERROTIN NEW YORK',
        description: 'I have not been here yet.',
        kind: 'Gallery',
        area: 'Lower East Side, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7195864, -73.9892543],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Japan Society',
        description: 'I have not been here yet.',
        kind: 'Cultural Center',
        area: 'Murray Hill, Manhattan',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.75251, -73.968287],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Royal Ontario Museum',
        description: 'I have not been here yet.',
        kind: 'Museum',
        area: 'Toronto, Canada',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [43.6677097, -79.3947771],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Shrine of the Book',
        description: 'I have not been here yet.',
        kind: 'Museum',
        area: 'Jerusalem',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [31.7734662, 35.2029821],
      },
    },
  ],
};

export default cultural;
