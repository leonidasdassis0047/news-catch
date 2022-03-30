import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../config/colors';

const Divider = ({style, height = 2, width = '100%'}) => {
  return (
    <View
      style={[
        styles.divider,
        {
          height,
          width,
        },
        style,
      ]}
    />
  );
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    backgroundColor: colors.light,
    marginVertical: 2,
  },
});
