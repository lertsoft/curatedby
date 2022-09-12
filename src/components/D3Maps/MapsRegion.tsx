import {
  handleMouseOver,
  handleMouseOut,
  handleMouseMove,
} from './helpers/handleToolTip';
import '@/styles/MapsRegion.module.css';

export default function MapsRegion(props) {
  const { path, tooltipData } = props;

  // each path defines the shape of a region in the map
  return (
    <path
      className="path"
      d={path}
      onMouseOver={() => {
        handleMouseOver(tooltipData);
      }}
      onMouseOut={handleMouseOut}
      onMouseMove={(event) => {
        handleMouseMove(event);
      }}
    />
  );
}
