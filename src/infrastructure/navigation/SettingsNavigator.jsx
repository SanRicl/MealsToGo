import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import SettingsScreen from '../../features/settings/screens/SettingsScreen';

const SettingsStack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: 'screen',
        headerShown: false,
      }}
    >
      <SettingsStack.Screen
        options={{
          headerShown: false,
        }}
        name="Setting"
        component={SettingsScreen}

      />
      <SettingsStack.Screen name="Favourites" component={() => null} />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
