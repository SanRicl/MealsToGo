import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import Spacer from '../../../components/spacer/Spacer';
import { FavouritesContext } from '../../../services/favourites/favouritesContext';
import RestaurantInfoCard from '../../restaurants/components/RestaurantInfoCard/RestaurantInfoCard';
import { Area, RestaurantFList, EmptyWarningContainer } from './styles';
import { Text } from '../../../components/typography/Text';

const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <Area>
      {!favourites.length ? (
        <EmptyWarningContainer>
          <Text>No favourites yet</Text>
        </EmptyWarningContainer>
      ) : (
        <RestaurantFList
          data={favourites}
          renderItem={({ item }) => (
            <>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('RestaurantDetail', {
                    restaurant: item,
                  })
                }
              >
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard data={item} />
                </Spacer>
              </TouchableOpacity>
            </>
          )}
        />
      )}
    </Area>
  );
};

export default FavouritesScreen;
