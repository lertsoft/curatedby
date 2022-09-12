/* eslint-disable no-empty-pattern */
/* eslint-disable no-console */
/* eslint-disable func-names */

import { useState, useEffect } from 'react';

import * as d3 from 'd3';

export const useMapTools = function () {
  // store loaded map data in a state
  const [mapData, setMapData] = useState({
    // Jankiest type definition I have ever done! Please Fixed later lol
    data: ({} = <any>''),
    loading: true,
  });

  // only fetch map data once and create a tooltip
  useEffect(() => {
    d3.json(
      'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/new-york-counties.geojson'
    )
      .then((data: any) => {
        setMapData((prevState) => {
          return { ...prevState, data, loading: false };
        });
      })
      .catch((err) => {
        console.log('error occurred with loading map', err);
      });

    /// tooltip creation
    d3.select('body')
      .append('div')
      .attr('id', 'tooltip')
      .attr('style', 'position: relative; opacity: 0');
    ///
  }, []);

  return { mapData };
};
