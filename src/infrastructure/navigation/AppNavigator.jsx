import React, { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Button } from 'react-native';

import RestaurantsNavigator from './RestaurantsNavigator';
import MapScreen from '../../features/map/screens/MapScreen';
import { SafeArea } from '../../components/utility/SafeArea';

import { AuthenticationContext } from '../../services/authentication/authenticationContext';

import { RestaurantsContextProvider } from '../../services/restaurant/restaurantsContext';
import { LocationContextProvider } from '../../services/location/locationContext';
import { FavouritesContextProvider } from '../../services/favourites/favouritesContext';

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()}>
        LogOut
      </Button>
    </SafeArea>
  );
};

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
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};

export default AppNavigation;
