import React from 'react';
import {StyleSheet, Text} from 'react-native';

import colors from '../../config/colors';
import fonts from '../../config/fonts';

const AppText = ({children, style, ...otherProps}) => {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: 16.5,
    color: colors.text,
    fontWeight: '400',
    fontFamily: fonts.regular,
  },
});
