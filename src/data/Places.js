const Places = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Tracadero Beach',
        description: 'I have not been here yet.',
        kind: 'Beach',
        area: 'Bayahibe, Dominican Republic',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.3523154, -68.8338216],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Mount Athos',
        description: 'I have not been here yet.',
        kind: 'Town',
        area: 'Mount Athos, Greece',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.2831012, 24.1960786],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Saint-Malo',
        description: 'I have not been here yet.',
        kind: 'Town',
        area: 'Saint-Malo, France',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [48.6462993, -2.0066348],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'The Gulch',
        description: 'I have not been here yet.',
        kind: 'Town',
        area: 'Nashville, Tennessee',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [36.1532875, -86.7821323],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Mont Saint-Michel',
        description: 'I have not been here yet.',
        kind: 'Town',
        area: 'Le Mont-Saint-Michel, France',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [48.6244746, -1.5286981],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Balneario Villa Miriam',
        description: 'I have not been here yet.',
        kind: 'Beach',
        area: 'Barahona, DR',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [18.0302249, -71.1415601],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Belambra Clubs "Pineto"',
        description: 'I have not been here yet.',
        kind: 'Hotel',
        area: 'Borgo, France',
        visits: '0',
        visited: false,
      },
      geometry: {
        type: 'Point',
        coordinates: [42.6019752, 9.4851518],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Tired Thrift',
        description:
          'Small shop that carries plenty of okayish things to thrift but at a premium.',
        kind: 'Thrift Store',
        area: 'Greenpoint, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7239023, -73.9514276],
      },
    },

    {
      type: 'Feature',
      properties: {
        name: 'Awoke Vintage Brooklyn',
        description:
          'Really small vintage shop with good curated items that carry a premium even though they are old.',
        kind: 'Thrift Store',
        area: 'Greenpoint, Brooklyn',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.7252109, -73.9514055],
      },
    },
  ],
};

export default Places;
