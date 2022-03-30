import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

import {RowContainer} from './utils';
import {Text} from './common';
import {Heading} from './typography';
import colors from '../config/colors';

const WeatherCard = ({current, location, onPress}) => {
  return (
    <View style={styles.container}>
      <RowContainer justifyContent="space-between">
        <View style={styles.weather}>
          <RowContainer justifyContent="flex-start" style={{marginVertical: 0}}>
            <Image
              style={{width: 40, height: 40, marginRight: 8}}
              source={{uri: `https:${current?.condition?.icon}`}}
            />
            <Text style={styles.smallText}>{current?.temp_c} C</Text>
          </RowContainer>
          <Text style={styles.smallText}>{current?.condition?.text}</Text>
        </View>
        <View style={styles.user}>
          <Heading style={{textAlign: 'right', fontSize: 16.5}}>
            Hey, Leonidas
          </Heading>
          <RowContainer justifyContent="flex-end">
            <Text style={styles.smallText}>{location?.name},</Text>
            <Text style={[styles.smallText, {marginLeft: 4}]}>
              {location?.region}
            </Text>
          </RowContainer>
          <Text style={[styles.smallText, {textAlign: 'right'}]}>
            {location?.localtime}
          </Text>
        </View>
      </RowContainer>
    </View>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginVertical: 4,
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 4,
  },
  user: {flex: 1, height: '100%'},
  weather: {flex: 1},
  smallText: {fontSize: 14.5},
});
