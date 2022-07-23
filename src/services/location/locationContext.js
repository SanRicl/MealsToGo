import React, { useState, useEffect, createContext } from 'react';

import { locationRequest, locationTransform } from './locationService';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState('San Francisco');

  const onSearch = (searchKeyword) => {
    setIsloading(true);
    setKeyword(searchKeyword);
    if (!searchKeyword.length) {
      //dont do anything
      return;
    }
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsloading(false);
        setLocation(result);
        console.log(result);
      })
      .catch((error) => {
        setIsloading(false);
        setError(error);
      });
  };

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
