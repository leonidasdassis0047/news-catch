import React from 'react';
import {StyleSheet, View} from 'react-native';

const RowContainer = ({children, justifyContent = 'center', style}) => {
  return (
    <View
      style={[
        styles.container,
        {
          justifyContent,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default RowContainer;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginVertical: 2,
  },
});
