import React, { createContext, useEffect, useMemo, useState } from 'react';

import { restaurantRequest, restaurantTransform } from './restaurantsService';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: [1, 2, 3],
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
