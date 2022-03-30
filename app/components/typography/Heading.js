import React from 'react';
import {StyleSheet} from 'react-native';

import Text from '../common/Text';
import colors from '../../config/colors';
import fonts from '../../config/fonts';

const Heading = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default Heading;

const styles = StyleSheet.create({
  text: {
    fontSize: 19,
    color: colors.black,
    fontFamily: fonts.bold,
    marginVertical: 4,
  },
});
