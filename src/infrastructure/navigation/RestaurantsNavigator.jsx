import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import RestaurantScreen from '../../features/restaurants/screens/RestaurantScreen';
import { Text } from 'react-native';

const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false, ...TransitionPresets.ModalPresentationIOS, }}>
      <RestaurantStack.Screen name="Restaurants" component={RestaurantScreen} />
      <RestaurantStack.Screen name="RestaurantDetail" component={() => <Text>Restauran Detail</Text>} />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
