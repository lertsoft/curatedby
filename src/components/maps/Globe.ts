// import { useRef } from 'react';

// import * as d3 from 'd3';
// import {topojson } from 'd3';
// import style from 'styled-jsx/style';

function globe(): void {
  //   const ref = useRef((svg) => {
  //     const width = 700;
  //     const height = 700;
  //     const speed = -1e-2;
  //     const start = Date.now();
  //     const sphere = { type: 'Sphere' };
  //     const projection = d3.geo
  //       .orthographic()
  //       .scale(width / 2.1)
  //       .translate([width / 2, height / 2])
  //       .precision(0.5);
  //     const graticule = d3.geo.graticule();
  //     const canvas = d3
  //       .select('body')
  //       .append('canvas')
  //       .attr('width', width)
  //       .attr('height', height);
  //     const context = canvas.node().getContext('2d');
  //     const path = d3.geo.path().projection(projection).context(context);
  //     d3.json(
  //       'https://s3-us-west-2.amazonaws.com/s.cdpn.io/95802/world-110m.json',
  //       function (error, topo) {
  //         if (error) throw error;
  //         const land = topojson.feature(topo, topo.objects.land);
  //         const grid = graticule();
  //         d3.timer(function () {
  //           context.clearRect(0, 0, width, height);
  //           projection.rotate([speed * (Date.now() - start), -15]).clipAngle(90);
  //           context.beginPath();
  //           path(sphere);
  //           context.lineWidth = 0;
  //           context.strokeStyle = 'transparent';
  //           context.stroke();
  //           context.fillStyle = 'transparent';
  //           context.fill();
  //           projection.clipAngle(180);
  //           context.beginPath();
  //           path(land);
  //           context.fillStyle = '#dadac4';
  //           context.fill();
  //           context.beginPath();
  //           path(grid);
  //           context.lineWidth = 0.5;
  //           context.strokeStyle = 'rgba(119,119,119,0)';
  //           context.stroke();
  //           projection.clipAngle(90);
  //           context.beginPath();
  //           path(land);
  //           context.fillStyle = '#737368';
  //           context.fill();
  //           context.lineWidth = 0;
  //           context.strokeStyle = 'transparent';
  //           context.stroke();
  //         });
  //       }
  //     );
  //     // eslint-disable-next-line no-restricted-globals
  //     d3.select(self.frameElement).style('height', `${height}px`);
  //   });
  //   return (
  //     <svg
  //     ref={ref}
  //     style={{
  //       height: 500,
  //       widht: "100%",
  //     }}
  //     >
  //     </svg>
  //   );
}
export default globe;
