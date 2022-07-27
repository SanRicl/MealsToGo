import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const Address = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const RestaurantCard = styled(Card)`
  background: ${(props) => props.theme.colors.bg.primary};

`;

export const RestaurantCardCover = styled(Card.Cover)`
  background: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
export const SectionEnd = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;