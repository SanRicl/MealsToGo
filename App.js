import React, { useState, useEffect } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { RestaurantsContextProvider } from './src/services/restaurant/restaurantsContext';
import { LocationContextProvider } from './src/services/location/locationContext';
import { FavouritesContextProvider } from './src/services/favourites/favouritesContext';

import { initializeApp } from 'firebase/app';
import { signInWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';

import Navigation from './src/infrastructure/navigation/AppNavigator';

const firebaseConfig = {
  apiKey: 'AIzaSyABDSrizCTeDDoOGatDfmDx2MhMkrUFWWU',
  authDomain: 'mealstogo-a8ed8.firebaseapp.com',
  projectId: 'mealstogo-a8ed8',
  storageBucket: 'mealstogo-a8ed8.appspot.com',
  messagingSenderId: '324550778714',
  appId: '1:324550778714:web:236a50e48e9b6af8ff9d63',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      signInWithEmailAndPassword(auth, 'sanderson@gmail.com', 'test123456')
        .then((user) => {
          setIsAuthenticated(true);
        })
        .catch((e) => console.log(e));
    }, 2000);
  }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!latoLoaded || !oswaldLoaded) {
    return null;
  }

  if (!isAuthenticated) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
