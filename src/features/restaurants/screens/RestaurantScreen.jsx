import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { SafeArea } from '../../../components/utility/SafeArea';
import RestaurantList from '../components/RestaurantInfo/RestaurantList';
import SearchBar from '../components/Search/Search';

const RestaurantScreen = ({ navigation }) => {

  return (
    <SafeArea>
      <SearchBar />
      <RestaurantList navigation={navigation} />
      <StatusBar />
    </SafeArea>
  );
};

export default RestaurantScreen;
