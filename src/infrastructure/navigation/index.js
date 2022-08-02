import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './AppNavigator';

import { AuthenticationContext } from '../../services/authentication/authenticationContext';
import AccountNavigator from './AccountNavigator';

const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return <NavigationContainer>{isAuthenticated ? <AppNavigator /> : <AccountNavigator />}</NavigationContainer>;
};

export default Navigation;
