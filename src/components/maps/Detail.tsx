import React from 'react';

import { AppName } from '@/data/constant';
import { Places } from '@/types/places';
import { parse } from '@/utils/parse';

interface Props {
  shop: Places;
}

export const Detail = ({ shop }: Props) => {
  const {
    name,
    color,
    kind,
    visits,
    // location1,
    location2,
    table,
    coordinates,
    distance,
  } = parse(shop);

  return (
    <div className="p-6">
      <h1 className="text-lg">{name}</h1>
      <p className="text-sm text-gray-500">
        <a
          className="inline-block align-middle"
          style={{ color }}
          // href={speedtest}
          target="_blank"
          rel="noreferrer"
        >
          {kind}
        </a>
        <span className=" inline-block align-middle ">{visits}</span>
        {distance ? (
          <>
            <span className="mx-1 inline-block align-middle">・</span>
            <span className="inline-block align-middle">{distance}</span>
          </>
        ) : null}
        <span className="mx-1 inline-block align-middle">・</span>
        <span className="inline-block align-middle">
          {coordinates.map((i) => i.toFixed(3)).join(', ')}
        </span>
      </p>
      <table className="mt-5 mb-3 px-2 text-sm">
        <tbody>
          {table.map(([key, value]) => (
            <tr key={key}>
              <td className="py-2 pr-5 text-right text-gray-600">{key}</td>
              <td className="py-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-5 mb-2 text-center">
        <a
          href={`https://www.google.com/maps/place/${name}/`}
          target="_blank"
          rel="noreferrer"
          className="mx-1 rounded border border-gray-200 px-4 py-2 text-sm text-gray-600"
        >
          Google Maps
        </a>
        <a
          href={`http://api.map.baidu.com/marker?location=${location2}&title=${name}&content=${AppName}&output=html`}
          target="_blank"
          rel="noreferrer"
          className="mx-1 rounded border border-gray-200 px-4 py-2 text-sm text-gray-600"
        >
          Apple Maps
        </a>
      </div>
    </div>
  );
};
