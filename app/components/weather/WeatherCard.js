import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import RNLocation from 'react-native-location';

import colors from '../../config/colors';
import {Text} from '../common';
import {RowContainer} from '../utils';

import {getCurrentWeather} from '../../api';

const weather_struct = {
  current: {
    cloud: 26,
    condition: {
      code: 1003,
      icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
      text: 'Partly cloudy',
    },
    feelslike_c: 31.7,
    feelslike_f: 89.1,
    gust_kph: 11.9,
    gust_mph: 7.4,
    humidity: 40,
    is_day: 1,
    last_updated: '2022-03-21 11:00',
    last_updated_epoch: 1647849600,
    precip_in: 0,
    precip_mm: 0,
    pressure_in: 29.82,
    pressure_mb: 1010,
    temp_c: 31.2,
    temp_f: 88.2,
    uv: 8,
    vis_km: 10,
    vis_miles: 6,
    wind_degree: 175,
    wind_dir: 'S',
    wind_kph: 10.4,
    wind_mph: 6.5,
  },
  location: {
    country: 'Uganda',
    lat: 0.32,
    localtime: '2022-03-21 12:03',
    localtime_epoch: 1647853429,
    lon: 32.57,
    name: 'Namirembe',
    region: 'Kampala',
    tz_id: 'Africa/Kampala',
  },
};

const WeatherCard = () => {
  const [weather, setRealtimeWeather] = useState(null);

  const getWeather = async function (q) {
    const currentWeather = await getCurrentWeather(q);
    setRealtimeWeather(currentWeather);
  };

  const getUpdate = async () => {
    RNLocation.configure({
      distanceFilter: 5.0,
    });
    let permission = false;
    permission = await RNLocation.checkPermission({
      ios: 'whenInUse',
      android: {detail: 'fine'},
    });
    if (!permission) {
      permission = await RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {detail: 'fine'},
      });
    }

    if (permission) {
      RNLocation.subscribeToLocationUpdates(locations => {
        getWeather(`${locations[0]?.latitude},${locations[0]?.longitude}`);
      });
    }
  };

  useEffect(() => {
    getUpdate();

    console.log(weather);
  }, [weather]);

  if (!weather) {
    return (
      <View style={[styles.container, styles.loadingCard]}>
        <Text>Loading weather updates ...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <RowContainer justifyContent="space-between">
        <View style={styles.locationContainer}>
          <Text
            style={
              styles.text
            }>{`${weather.location.name},${weather.location.region}`}</Text>
          <Text style={styles.text}>{weather.current.last_updated}</Text>
          <Text style={{fontSize: 20}}>{weather.current.temp_c}</Text>
        </View>
        <View style={styles.conditionContainer}>
          <Image
            source={{uri: `https:${weather.current.condition.icon}`}}
            resizeMode="cover"
            style={styles.icon}
          />
          <Text style={styles.text}>{weather.current.condition.text}</Text>
        </View>
      </RowContainer>
    </View>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '100%',
    height: 100,
    elevation: 2,
    marginBottom: 4,
    padding: 12,
  },
  conditionContainer: {
    alignItems: 'center',
  },
  icon: {width: 60, height: 60},
  locationContainer: {flex: 1},
  loadingCard: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {fontSize: 15},
});
