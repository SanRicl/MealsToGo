import React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

const Area = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Area>
      <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
    </Area>
  );
};

export default SearchBar;
