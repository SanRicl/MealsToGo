import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background: ${(props) => props.theme.colors.bg.primary};
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background: ${(props) => props.theme.colors.bg.primary};
  //if statusbar.currentHeight has a value, add margin-top with the value of statusbar.currentHeight
  //I've to do this check becouse on IOS I dont have statusbar.currentHeight, only on Android system. So if the client is on a Android, it'll return a value and put this on the marginTop
`;
