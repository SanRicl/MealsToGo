import { StyleSheet, Text } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import styled from 'styled-components/native';

const Title = styled.Text`
  padding: 14px;
`;

const RestaurantInfoCard = ({ data, index }) => {
  return (
    <Card key={index} elevation={5} style={{backgroundColor: '#fff' }}>
      <Card.Cover
        source={{
          uri: 'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
        }}
        style={{ backgroundColor: '#fff',
        padding: 15,}}
      />
      <Title>{data.name}</Title>
    </Card>
  );
};

export default RestaurantInfoCard;
