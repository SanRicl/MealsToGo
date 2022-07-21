import React, { useContext } from 'react';
import Spacer from '../../../../components/spacer/Spacer';
import { RestaurantsContext } from '../../../../services/restaurant/restaurantsContext';
import RestaurantInfoCard from '../RestaurantInfoCard/RestaurantInfoCard';
import { Area, RestaurantFList } from './styles';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { View } from 'react-native';

const RestaurantList = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <Area>
      {isLoading && (
        <View style={{ position: 'boolean', top: '50%'}}>
          <ActivityIndicator animating={true} color={Colors.red400} size={50}  />
        </View>
      )}
      <RestaurantFList
        data={restaurants}
        renderItem={({ item }) => (
          <>
            <Spacer position={'bottom'} size={'large'}>
              <RestaurantInfoCard data={item}  />
            </Spacer>
          </>
        )}
        keyExtractor={(item) => item.placeId}
      />
    </Area>
  );
};

export default RestaurantList;
