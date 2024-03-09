/* eslint-disable func-names */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable prefer-const */
import React, { useEffect, useRef } from 'react';

import * as d3 from 'd3';

// import { handleMouseOver, handleMouseOut } from './helpers/handleToolTip';

const AllPlacesVisualization = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const width = 800;
    const height = 600;

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    const tooltip = d3
      .select('body')
      .append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0);

    function handleMouseOver(event, d) {
      tooltip.transition().duration(200).style('opacity', 0.9);
      tooltip
        .html(
          `<strong>${d.properties.name}</strong></br>Visited: ${
            d.properties.Visited ? 'Yes' : 'No'
          }`
        )
        .style('left', `${event.pageX + 10}px`)
        .style('top', `${event.pageY - 28}px`);
    }

    function handleMouseOut() {
      tooltip.transition().duration(500).style('opacity', 0);
    }

    const projection = d3
      .geoMercator()
      .center([0, 0])
      .scale(100)
      .translate([width / 2, height / 2]);

    // eslint-disable-next-line unused-imports/no-unused-vars
    (function () {
      const circles: any = svg
        .selectAll('circle')
        .data(data.features)
        .enter()
        .append('circle')
        .attr(
          'cx',
          (d) => projection([d.geometry.coordinates, d.geometry.coordinates])[0]
        )
        .attr(
          'cy',
          (d) => projection([d.geometry.coordinates, d.geometry.coordinates])[1]
        )
        .attr('r', 8)
        .style('fill', 'purple')
        .on('mouseover', handleMouseOver)
        .on('mouseout', handleMouseOut);

      const labels: any = svg
        .selectAll('text')
        .data(data.features)
        .enter()
        .append('text')
        .attr(
          'x',
          (d) =>
            projection([d.geometry.coordinates, d.geometry.coordinates])[0] + 10
        )
        .attr(
          'y',
          (d) =>
            projection([d.geometry.coordinates, d.geometry.coordinates])[1] - 5
        )
        .text((d) => d.properties.name)
        .attr('font-size', '12px')
        .attr('fill', 'black');
    })();
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default AllPlacesVisualization;
