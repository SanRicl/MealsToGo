import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Area = styled.View`
  background: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
`;

//"attrs give access to give some props" to FlatList. In this case to avoid use inline styles
export const RestaurantFList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const EmptyWarningContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
