import React from 'react';
import styled from 'styled-components/native';
import RestaurantInfoCard from '../RestaurantInfoCard/RestaurantInfoCard';
import { Area } from './styles';

const RestaurantList = () => {
  const restaurant = [
    {
      name: 'Some Restaurant',
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
      photos: [
        'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
      ],
      address: '100 some random street',
      isOpenNow: true,
      rating: 4,
      isClosedTemporarily: true,
    },
  ];

  return (
    <Area>
      {restaurant.map((item, index) => (
        <RestaurantInfoCard data={item} key={index} />
      ))}
    </Area>
  );
};

export default RestaurantList;
