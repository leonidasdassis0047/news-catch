import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import AppNavigation from './app/navigation/AppNavigation';

const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['new NativeEventEmitter']);
  }, []);

  return <AppNavigation />;
};

export default App;
