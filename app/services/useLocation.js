import RNLocation from 'react-native-location';
import {useEffect, useState} from 'react';

const useLocation = () => {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    RNLocation.configure({
      distanceFilter: 5.0,
      interval: 5000, // Milliseconds
    });
    RNLocation.subscribeToLocationUpdates(locations => setLocation(locations));
  });
  return [location];
};

export default useLocation;
