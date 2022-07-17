import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

const Title = styled.Text`
  padding: 14px;
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
  background: #fff;
`;

const RestaurantCardCover = styled(Card.Cover)`
  background: #fff;
  padding: 15px;
`;

const RestaurantInfoCard = ({ data }) => {
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        source={{
          uri: 'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg'
        }}
      />
      <Title>{data.name}</Title>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
