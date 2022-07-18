import React from 'react';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Text, Image } from 'react-native';
import { View } from 'react-native';

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
const Open = styled(SvgXml)``;

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
        <Title>{data.name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((a, index) => (
              <SvgXml xml={star} width={20} height={20} key={index} />
            ))}
          </Rating>
          <SectionEnd>
            {data.isClosedTemporarily && (
              <Text variant="label" style={{ color: 'red' }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <View style={{ paddingLeft: 16 }} />
            {data.isOpenNow && <Open xml={open} width={20} height={20} />}
            <View style={{ paddingLeft: 16 }} />
            <Image style={{ width: 15, height: 15 }} source={{ uri: data.icon }} />
          </SectionEnd>
        </Section>
        <Address>{data.address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
