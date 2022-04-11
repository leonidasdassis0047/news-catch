import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import colors from '../config/colors';
import locationService from '../services/location';

import MainNavigation from './MainNavigation';

const AppNavigation = () => {
  const [locations, setLocations] = useState({});

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <MainNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
