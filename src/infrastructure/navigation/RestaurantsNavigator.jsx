import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import RestaurantScreen from '../../features/restaurants/screens/RestaurantScreen';
import RestaurantDetailScreen from '../../features/restaurants/screens/RestaurantDetailScreen';

const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false, ...TransitionPresets.ModalPresentationIOS, }}>
      <RestaurantStack.Screen name="Restaurant" component={RestaurantScreen} />
      <RestaurantStack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
