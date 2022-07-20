import React, { useContext } from 'react';
import Spacer from '../../../../components/spacer/Spacer';
import { RestaurantsContext } from '../../../../services/restaurant/restaurantsContext';
import RestaurantInfoCard from '../RestaurantInfoCard/RestaurantInfoCard';
import { Area, RestaurantFList } from './styles';

const RestaurantList = () => {
  const {isLoading, error , restaurants } = useContext(RestaurantsContext);


  return (
    <Area>
      <RestaurantFList
        data={restaurants}
        renderItem={({ item }) => (
          <>
            <Spacer position={'bottom'} size={'large'}>
              <RestaurantInfoCard data={item} />
            </Spacer>
          </>
        )}
        keyExtractor={(item) => item.placeId}
      />
    </Area>
  );
};

export default RestaurantList;
