import React from 'react';
import { StatusBar } from 'react-native';
import { SafeArea } from '../../../components/utility/SafeArea';
import RestaurantList from '../components/RestaurantInfo/RestaurantList';
import SearchBar from '../components/SearchBar/SearchBar';
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
