import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RestaurantsNavigator from './RestaurantsNavigator';

import MapScreen from '../../features/map/screens/MapScreen';

import { RestaurantsContextProvider } from '../../services/restaurant/restaurantsContext';
import { LocationContextProvider } from '../../services/location/locationContext';
import { FavouritesContextProvider } from '../../services/favourites/favouritesContext';
import SettingsNavigator from './SettingsNavigator';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Restaurants') {
                  iconName = focused ? 'md-restaurant' : 'md-restaurant-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'settings' : 'settings-outline';
                } else if (route.name === 'Map') {
                  iconName = focused ? 'map' : 'map-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="Map" component={MapScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Settings" component={SettingsNavigator} options={{ headerShown: false }}/>
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};

export default AppNavigation;
