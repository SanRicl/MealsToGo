import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const sizesVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionsVariant = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizesVariant[size]
  const property = positionsVariant[position]
  const value = theme.space[sizeIndex]
  return `${property}:${value}`;
}

const Spacer = styled.View`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};

export default Spacer;
