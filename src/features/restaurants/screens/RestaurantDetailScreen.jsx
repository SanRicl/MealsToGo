import React from 'react';
import RestaurantInfoCard from '../components/RestaurantInfoCard/RestaurantInfoCard';
import { SafeArea } from '../../../components/utility/SafeArea';

const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard data={restaurant} />
    </SafeArea>
  );
};

export default RestaurantDetailScreen;
