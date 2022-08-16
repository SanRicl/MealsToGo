import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import SettingsScreen from '../../features/settings/screens/SettingsScreen';
import FavouritesScreen from '../../features/settings/screens/FavouritesScreen';
import CameraScreen from '../../features/settings/screens/CameraScreen';

const SettingsStack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: 'screen',
      }}
    >
      <SettingsStack.Screen
        options={{
          headerShown: false,
        }}
        name="Options"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
