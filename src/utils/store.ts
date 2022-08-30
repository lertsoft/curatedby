/* eslint-disable no-return-assign */
// import { useStorage } from '@vueuse/core';
// import Fuse from 'fuse.js';
import { computed, ref } from 'reactivue';

import raw from '@/data/letsGo';
import { Places } from '@/types/places';

export const rawData = Object.freeze(raw);

export const geo = Object.freeze({
  type: 'FeatureCollection',
  features: Object.values(rawData).flatMap((i) => i as any[]),
});

// export const geo = Object.freeze({
//   type: 'FeatureCollection',
//   features: Object.values(rawData).flatMap((i) => i.data.features as any[]),
// });

export const shops = Object.freeze(
  geo.features.map(
    (i) =>
      ({
        ...i,
        coordinates: i.geometry.coordinates,
      } as Places)
  )
);
// export const fuseByName = new Fuse(shops, {
//   includeScore: false,
//   keys: [['properties', '名称']],
// });

// export const fuseByReferrers = new Fuse(shops, {
//   includeScore: false,
//   keys: [['properties', 'referrers']],
// });

export type Kind = keyof typeof raw;

// export const city = useStorage('cafe-cn-city', 'shanghai') as Ref<Cities>;
// export const filter = new Storage('curated-by-filter', 'all');
export const filter = new Storage();

export const loc = ref<[number, number] | null>(null);
export const about = false;
export const searchOpen = ref(false);
export const searchString = ref('');

// eslint-disable-next-line @typescript-eslint/no-use-before-define
export const data = computed(() => rawData[raw.kind]);

// export const filteredGeo = computed(() => {
//   if (filter.value === 'all') {
//     return geo;
//   }
//   return {
//     ...geo,
//     features: (geo.features as any[]).filter(
//       (i) => i.properties['marker-color'] === filter.value
//     ),
//   };
// });

// export const searchResult = computed(() => {
//   if (searchString.value.startsWith('@'))
//     return fuseByReferrers.search(searchString.value).map((i) => i.item);
//   return fuseByName.search(searchString.value).map((i) => i.item);
// });

// export const current = null;
export const current = shops || null;

export const kindName = computed(() => data.value.name);
export const kind = Object.entries(raw);

export const setFilter = (v: string) =>
  filter.value === v ? (filter.value = 'all') : (filter.value = v);
export const changeKind = (v: Kind) => (raw.kind = v);

export const setCurrent = (v: Places | null) => (current.values[1] = v);
export const setLoc = (v: [number, number] | null) => (loc.value = v);

export const setAbout = (v: boolean) => (raw.about = v);
// export const setSearchOpen = (v: boolean) => (searchOpen.value = v);
// export const setSearchString = (str: string) => (searchString.value = str);
