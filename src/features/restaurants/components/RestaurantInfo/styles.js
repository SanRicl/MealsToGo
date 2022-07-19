import styled from 'styled-components/native';

export const Area = styled.View`
  background: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
