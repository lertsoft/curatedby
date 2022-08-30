// import { ignoredProperties } from '@/data/constant';
import { ignoredProperties } from '@/data/constant';
import { Places } from '@/types/places';

import { getDistanceFromMe } from './distance';

export const parse = (shop: Places) => {
  const { properties, coordinates } = shop;

  const location1 = coordinates.join(',');
  const location2 = coordinates.slice().reverse().join(',');
  const distance = getDistanceFromMe(coordinates);

  const table = Object.entries(properties).filter(
    ([k]) => !ignoredProperties.includes(k)
  );

  return {
    description: properties.description,
    kind: properties.kind,
    visits: properties.visits,
    visited: properties.visited,
    shop,
    properties,
    coordinates,
    color: properties['marker-color'],
    name: properties.name,
    speedtest: properties['Speedtest 链接'],
    // referrers: properties.referrers as any as string[],
    location1,
    location2,
    table,
    distance,
  };
};
