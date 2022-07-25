import React, { useContext, useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';

import { LocationContext } from '../../../services/location/locationContext';
import { RestaurantsContext } from '../../../services/restaurant/restaurantsContext';

import SearchBar from '../components/MapSearch';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = []} = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <SearchBar />
      <Map region={{ latitude: lat, longitude: lng, latitudeDelta: latDelta, longitudeDelta: 0.02 }}>
        {restaurants.map((restaurant, index) => (
          <MapView.Marker
            key={index}
            title={restaurant.name}
            coordinate={{ latitude: restaurant.geometry.location.lat, longitude: restaurant.geometry.location.lng }}
          />
        ))}
      </Map>
    </>
  );
};

export default MapScreen;
