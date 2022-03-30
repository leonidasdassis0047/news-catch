import React from 'react';

import {StyleSheet, SafeAreaView} from 'react-native';
import colors from '../../config/colors';

function Screen({children, style}) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.light,
    paddingHorizontal: 2,
  },
});

export default Screen;
