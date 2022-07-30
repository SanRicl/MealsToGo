import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './AppNavigator';

import { AuthenticationContext } from '../../services/authentication/authenticationContext';
import AccountNavigator from './AccountNavigator';

const Navigation = () => {
  const { isAthenticated } = useContext(AuthenticationContext);
  return <NavigationContainer>{isAthenticated ? <AppNavigator /> : <AccountNavigator />}</NavigationContainer>;
};

export default Navigation;
