import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

const Title = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Address = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const RestaurantCard = styled(Card)`
  background: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantInfoCard = ({ data }) => {
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        source={{
          uri: 'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
        }}
      />
      <Info>
        <Title>{data.name}</Title>
        <Address>{data.address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
