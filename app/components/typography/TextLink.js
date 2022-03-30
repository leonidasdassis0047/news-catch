import React from 'react';
import {StyleSheet, View} from 'react-native';

import Text from '../common/Text';
import colors from '../../config/colors';
import fonts from '../../config/fonts';

const TextLink = ({text, onPress, style}) => {
  return (
    <Text style={[styles.text, style]} onPress={onPress}>
      {text}
    </Text>
  );
};

export default TextLink;

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: colors.primary,
    fontFamily: fonts.bold,
    paddingHorizontal: 2,
  },
});
