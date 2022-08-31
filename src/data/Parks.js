const Parks = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'WNYC Transmitter Park',
        description: '22 Mbps',
        kind: 'Park',
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
        description: '22 Mbps',
        kind: 'Park',
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
        description: '22 Mbps',
        kind: 'Park',
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
        description: '22 Mbps',
        kind: 'Park',
        visits: '1',
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
        description: '22 Mbps',
        type: 'Park',
        visits: '1',
        visited: true,
      },
      geometry: {
        type: 'Point',
        coordinates: [40.8625608, -73.9312995],
      },
    },
  ],
};

export default Parks;
