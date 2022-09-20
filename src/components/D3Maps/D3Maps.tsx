import * as d3 from 'd3';

import { useMapTools } from '@/hooks/useMapTools';

import { setMapProjection } from './helpers/setMapProtection';
import MapsRegion from './MapsRegion';
import '@/styles/D3Maps.module.css';

export default function D3Maps(_props: any) {
  // load geoJSON and create tooltip
  const { mapData } = useMapTools();

  // render map only when map data is fully loaded
  if (!mapData.loading) {
    // render the regions
    // compute a path function based on correct projections that we will use later
    const path = d3.geoPath().projection(setMapProjection(mapData.data));
    // for each geoJSON coordinate, compute and pass in the equivalent svg path
    const mapsRegions = mapData.data.features.map((data: any) => {
      const regionName = data.properties.name;
      return (
        <MapsRegion
          key={data.properties.geoid}
          path={path(data)}
          tooltipData={regionName}
        />
      );
    });

    return (
      <>
        <h1>New York State Counties</h1>
        {/* <div className="relative flex"> */}
        <div className="flex justify-center">
          <svg className="map-canvas absolute">
            <g className="">{mapsRegions}</g>
          </svg>
        </div>
        {/* </div> */}
      </>
    );
  }
  return <h1>Loading...</h1>;
}
