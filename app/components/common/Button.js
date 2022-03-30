import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Text from './Text';
import colors from '../../config/colors';
import fonts from '../../config/fonts';

function AppButton({title, onPress, color = 'primary', style, textStyle}) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors[color]}, style]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 17.5,
    fontFamily: fonts.semiBold,
  },
});

export default AppButton;
