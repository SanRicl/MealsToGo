import React from 'react';
import { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { Area } from './styles';

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
