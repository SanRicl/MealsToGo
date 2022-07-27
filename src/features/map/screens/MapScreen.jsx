import React, { useContext, useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';

import { LocationContext } from '../../../services/location/locationContext';
import { RestaurantsContext } from '../../../services/restaurant/restaurantsContext';
import MapCallout from '../components/MapCallout';

import SearchBar from '../components/MapSearch';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const MapScreen = ({navigation}) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

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
          >
            <MapView.Callout onPress={() => navigation.navigate("RestaurantDetail", {restaurant})}>
              <MapCallout restaurant={restaurant} />
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </Map>
    </>
  );
};

export default MapScreen;
