import RNLocation from 'react-native-location';

const locationService = function (callback) {
  RNLocation.configure({
    distanceFilter: 5.0,

    // // Android only
    // androidProvider: 'auto',
    // interval: 5000, // Milliseconds
    // fastestInterval: 10000, // Milliseconds
    // maxWaitTime: 5000, // Milliseconds
  });

  RNLocation.requestPermission({
    ios: 'whenInUse',
    android: {
      detail: 'coarse',
    },
  }).then(granted => {
    if (granted) {
      RNLocation.subscribeToLocationUpdates(locations => {
        // console.log(locations);
        callback(locations);
      });
    }
  });
};

/* Example location returned
        {
          speed: -1,
          longitude: -0.1337,
          latitude: 51.50998,
          accuracy: 5,
          heading: -1,
          altitude: 0,
          altitudeAccuracy: -1
          floor: 0
          timestamp: 1446007304457.029,
          fromMockProvider: false
        }
        */

export default locationService;
