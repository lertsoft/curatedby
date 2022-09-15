/* eslint-disable @next/next/no-img-element */
import React from 'react';

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  // MarkerClusterer,
} from '@react-google-maps/api';

import parks from '@/data/Parks';
import bars from '@/data/Bars';
import cafes from '@/data/Cafes';
import cultural from '@/data/Cultural';
import japan from '@/data/JapaneseRestaurant';
import dancing from '@/data/Dance';
import restaurants from '@/data/Food';
import travelLocations from '@/data/Places';

import MapStyle from './MapStyles';

const libraries = ['places'];

const mapContainerStyle = {
  width: '100vw',
  height: ' calc(100vh - 100px)',
  // position: 'absolute',
};

const options = {
  styles: MapStyle,
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: 40.7357909,
  lng: -73.990212,
};

function createKey(location) {
  return location.lat + location.lng;
}

// I am trying to implement the cluster market but It is not working...
// const clusterOptions = {
//   imagePath:
//     'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
// };

// Function to zoom in and locate the user if the button it is clicked
function Locate({ panTo }) {
  return (
    <button
      className=" absolute right-8 top-10 z-10  w-8"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src="/assets/icons/compass.svg" alt="Locate yourself icon" />
    </button>
  );
}

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
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(16);
  }, []);

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" relative justify-center object-center">
      <Locate panTo={panTo} />

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {/* TODO: Make that once you click a marker it will zoom in into it */}
        {/* TODO: Add a marker cluster event / function */}
        {/* TODO: Add a connection between the list and the maps so that once a item on a list it's clicked it will take you to the maps. */}

        {/* <MarkerClusterer options={options}>
          {(clusterer) =>
            japan.features.map((location) => (
              <Marker key={createKey(location)} position={location} clusterer={clusterer} />
            ))
          } 
          </MarkerClusterer> */}

        {/* <MarkerClusterer options={clusterOptions}>
          {(clusterer) =>  */}
        {japan.features.map((locations) => (
          <Marker
            // eslint-disable-next-line no-undef
            key={createKey(locations.properties.name)}
            position={{
              lat: locations.geometry.coordinates[0],
              lng: locations.geometry.coordinates[1],
            }}
            onClick={() => {
              setSelected(locations);
            }}
            icon={{
              url: `/assets/images/ramen.png`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
            // clusterer={clusterer}
          />
        ))}
        {/* </MarkerClusterer> */}

        {restaurants.features.map((locations) => (
          <Marker
            key={createKey(locations.properties.name)}
            position={{
              lat: locations.geometry.coordinates[0],
              lng: locations.geometry.coordinates[1],
            }}
            onClick={() => {
              setSelected(locations);
            }}
            icon={{
              url: `/assets/images/restaurant.png`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}

        {dancing.features.map((locations) => (
          <Marker
            key={createKey(locations.properties.name)}
            position={{
              lat: locations.geometry.coordinates[0],
              lng: locations.geometry.coordinates[1],
            }}
            onClick={() => {
              setSelected(locations);
            }}
            icon={{
              url: `/assets/images/clubs.png`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}

        {travelLocations.features.map((locations) => (
          <Marker
            key={createKey(locations.properties.name)}
            position={{
              lat: locations.geometry.coordinates[0],
              lng: locations.geometry.coordinates[1],
            }}
            onClick={() => {
              setSelected(locations);
            }}
            icon={{
              url: `/assets/images/travel.png`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}

        {parks.features.map((locations) => (
          <Marker
            key={createKey(locations.properties.name)}
            position={{
              lat: locations.geometry.coordinates[0],
              lng: locations.geometry.coordinates[1],
            }}
            onClick={() => {
              setSelected(locations);
            }}
            icon={{
              url: `/assets/images/park.png`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}

        {cafes.features.map((locations) => (
          <Marker
            key={createKey(locations.properties.name)}
            position={{
              lat: locations.geometry.coordinates[0],
              lng: locations.geometry.coordinates[1],
            }}
            onClick={() => {
              setSelected(locations);
            }}
            icon={{
              url: `/assets/images/cafe.png`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}

        {bars.features.map((locations) => (
          <Marker
            key={createKey(locations.properties.name)}
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

        {cultural.features.map((locations) => (
          <Marker
            key={createKey(locations.properties.name)}
            position={{
              lat: locations.geometry.coordinates[0],
              lng: locations.geometry.coordinates[1],
            }}
            onClick={() => {
              setSelected(locations);
            }}
            icon={{
              url: `/assets/images/museum.png`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}

        {/* Info window with all of the relevant data for me to understand better this place. */}
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
              <h2 className=" font-bold text-md">
                <span role="img" aria-label="Pin">
                  📍
                </span>{' '}
                {selected.properties.name}{' '}
                <span role="img" aria-label="Pin">
                  📍
                </span>
              </h2>
              <p>
                <span className="font-bold"> Description: </span> <br></br>
                {selected.properties.description}{' '}
              </p>
              <p>
                {' '}
                <span className="font-bold">
                  What kind of place is this?{'  '}
                </span>{' '}
                <br></br>
                {selected.properties.kind}
              </p>
              <p>
                {' '}
                <span className="font-bold">Have I visited? </span>
                <br></br>
                {String(selected.properties.visited)}{' '}
              </p>
              <p>
                {' '}
                <span className="font-bold">How many times? </span> <br></br>
                {selected.properties.visits}
              </p>
              <p>
                {' '}
                <span className="font-bold">Where is this located? </span>{' '}
                <br></br>
                {selected.properties.area}
                <br></br>
              </p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}
