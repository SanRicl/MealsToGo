import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import CompactRestaurantInfo from '../restaurant/CompactRestaurantInfo/CompactRestaurantInfo';
import Spacer from '../spacer/Spacer';
import { Text } from '../typography/Text';

const FavouritesWrapper = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const FavouritesBar = ({ favourites, navigation }) => {
  if (!favourites.length) return null;
  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant, index) => (
          <TouchableOpacity
            key={index}
            style={{ marginRight: 10 }}
            onPress={() => navigation.navigate('RestaurantDetail', { restaurant })}
          >
            <CompactRestaurantInfo restaurant={restaurant} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </FavouritesWrapper>
  );
};

export default FavouritesBar;
