import React from 'react';
import { StatusBar, } from 'react-native';
import styled from 'styled-components/native';
import RestaurantList from '../components/RestaurantInfo/RestaurantList';
import SearchBar from '../components/SearchBar/SearchBar';

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background: ${(props) => props.theme.colors.bg.primary};
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  //if statusbar.currentHeight has a value, add margin-top with the value of statusbar.currentHeight
  //I've to do this check becouse on IOS I dont have statusbar.currentHeight, only on Android system. So if the client is on a Android, it'll return a value and put this on the marginTop
`;

const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchBar />
      <RestaurantList />
      <StatusBar />
    </SafeArea>
  );
};

export default RestaurantScreen;
