import React, { useContext, useState } from 'react';
import { StatusBar } from 'react-native';
import FavouritesBar from '../../../components/favourites/FavouritesBar';
import { SafeArea } from '../../../components/utility/SafeArea';
import { FavouritesContext } from '../../../services/favourites/favouritesContext';
import RestaurantList from '../components/RestaurantInfo/RestaurantList';
import SearchBar from '../components/Search/Search';

const RestaurantScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      <SearchBar isFavouritesToggled={isToggled} onFavouritesToggled={() => setIsToggled(!isToggled)} />
      {isToggled && <FavouritesBar favourites={favourites} navigation={navigation}/> }
      <RestaurantList navigation={navigation} />
      <StatusBar />
    </SafeArea>
  );
};

export default RestaurantScreen;
