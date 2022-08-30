/* eslint-disable @next/next/no-img-element */
import React from 'react';

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

// import Places from '@/data/MyPlaces.json';
import LetsGo from '@/data/letsGo';
// eslint-disable-next-line import/extensions
import MapStyle from './mapStyles.js';

const libraries = ['places'];

const mapContainerStyle = {
  width: '100vw',
  height: '95vh',
  // position: 'absolute',
};

const options = {
  styles: MapStyle,
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: 40.7703,
  lng: -73.9883,
};

export default function MyMaps() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBL9zPZXbqYtJWC-my7mrTNVfrQLJ4g2Xw',
    libraries,
  });
  const [, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  // This hook is not going to be used
  // This hook creates a marker whenever the user clicks and add info to the infobox.
  const onMapClick = React.useCallback(() => {
    setMarkers((current) => [...current]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  // Hook to move the maps depending on user input location and zoom to that location
  // const panTo = React.useCallback(({ lat, lng }) => {
  //   mapRef.current.panTo({ lat, lng });
  //   mapRef.current.setZoom(14);
  // }, []);

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <Locate panTo={panTo} /> */}

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {LetsGo.features.map((locations) => (
          <Marker
            key={locations.properties.name}
            position={{
              lat: locations.geometry.coordinates[0],
              lng: locations.geometry.coordinates[1],
            }}
            onClick={() => {
              setSelected(locations);
            }}
            icon={{
              url: `/assets/images/cocktail.png`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{
              lat: selected.geometry.coordinates[0],
              lng: selected.geometry.coordinates[1],
            }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>
                <span role="img" aria-label="Park">
                  ♻️
                </span>{' '}
                {selected.properties.name}{' '}
                <span role="img" aria-label="Park">
                  ♻️
                </span>
              </h2>
              <p> Description: {selected.properties.description} </p>
              {/* <p> Have I visited? {selected.properties.visited} </p> */}
              <p> How many times? {selected.properties.visits}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}
