import React from 'react';
import Spacer from '../../../../components/spacer/Spacer';
import RestaurantInfoCard from '../RestaurantInfoCard/RestaurantInfoCard';
import { Area, RestaurantFList } from './styles';

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
    {
      name: 'Some Restaurant 2',
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
      photos: [
        'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
      ],
      address: '100 some random street',
      isOpenNow: true,
      rating: 4,
      isClosedTemporarily: true,
    },
    {
      name: 'Some Restaurant 1',
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
      photos: [
        'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
      ],
      address: '100 some random street',
      isOpenNow: true,
      rating: 4,
      isClosedTemporarily: true,
    },
    {
      name: 'Some Restaurant 4',
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
      photos: [
        'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
      ],
      address: '100 some random street',
      isOpenNow: true,
      rating: 4,
      isClosedTemporarily: true,
    },
    {
      name: 'Some Restaurant 5',
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
      <RestaurantFList
        data={restaurant}
        renderItem={({ item }) => (
          <>
            <Spacer position={'bottom'} size={'large'}>
              <RestaurantInfoCard data={item} />
            </Spacer>
          </>
        )}
        // keyExtractor={(item) => item}
      />
    </Area>
  );
};

export default RestaurantList;
