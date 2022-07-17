import styled from 'styled-components/native';
import RestaurantInfoCard from './RestaurantInfoCard';

const Area = styled.View`
  background: #fff;
  flex: 1;
  padding: 3%;
`;

const RestaurantList = () => {
  const restaurant = [
    {
      name: 'Some Restaurant',
      icon: '',
      photos: [
        'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
      ],
      address: '100 some random street',
      isOpenNow: true,
      rating: 4,
      isClosedTemporarily: false,
    },
  ];

  return (
    <Area>
      {restaurant.map((item, index) => (
        <RestaurantInfoCard data={item} key={index}/>
      ))}
    </Area>
  );
};


export default RestaurantList;
