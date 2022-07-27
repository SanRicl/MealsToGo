import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { FavouritesContext } from '../../services/favourites/favouritesContext';

const FavouriteButton = styled(TouchableOpacity)`
  background: transparent;
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext);
  //this could be better, cuz in the future I could have a performance problem using find method. I can use filter method.
  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavouriteButton onPress={() => (!isFavourite ? addToFavourites(restaurant) : removeFromFavourites(restaurant))}>
      <AntDesign name={isFavourite ? 'heart' : 'hearto'} size={24} color={isFavourite ? 'red' : 'white'} />
    </FavouriteButton>
  );
};

export default Favourite;
