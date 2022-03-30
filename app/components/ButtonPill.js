import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

import {Text} from './common';

const ButtonPill = ({text, style, textStyle, onPress}) => {
  return (
    <TouchableWithoutFeedback
      style={[styles.container, style]}
      onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableWithoutFeedback>
  );
};

export default ButtonPill;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderColor: colors.light,
    borderRadius: 50,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 2,
    marginRight: 8,
  },
  text: {
    fontSize: 15,
  },
});
