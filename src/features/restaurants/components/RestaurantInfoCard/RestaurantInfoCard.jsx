import React from 'react';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import star from '../../../../../assets/star.png';
import open from '../../../../../assets/open.png';
import Spacer from '../../../../components/spacer/Spacer';
import { Text } from '../../../../components/typography/Text';


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

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const SectionEnd = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;


const RestaurantInfoCard = ({ data }) => {
  const ratingArray = Array.from(new Array(Math.floor(data.rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        source={{
          uri: 'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
        }}
      />
      <Info>
        <Text variant="label">{data.name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((a, index) => (
              <Icon source={star} key={index} />
            ))}
          </Rating>
          <SectionEnd>
            {data.isClosedTemporarily && (
              <Text variant="error">
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {data.isOpenNow && <Icon source={open} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon style={{ width: 15, height: 15 }} source={{ uri: data.icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{data.address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
