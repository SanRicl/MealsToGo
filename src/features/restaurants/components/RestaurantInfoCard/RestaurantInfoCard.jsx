import React from 'react';
import star from '../../../../../assets/star.png';
import open from '../../../../../assets/open.png';
import Spacer from '../../../../components/spacer/Spacer';
import { Text } from '../../../../components/typography/Text';
import { Address, RestaurantCard, RestaurantCardCover, Info, Rating, SectionEnd, Section, Icon } from './styles.js';

const RestaurantInfoCard = ({ data }) => {
  const ratingArray = Array.from(new Array(Math.floor(data.rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{uri: data.photos[0]}} />
      <Info>
        <Text variant="label">{data.name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((a, index) => (
              <Icon source={star} key={index} />
            ))}
          </Rating>
          <SectionEnd>
            {data.isClosedTemporarily && <Text variant="error">CLOSED TEMPORARILY</Text>}
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
