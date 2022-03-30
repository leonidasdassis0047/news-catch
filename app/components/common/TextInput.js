import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../config/colors';

function AppTextInput({
  icon,
  iconRight,
  iconStyle,
  onPressIconRight,
  style,
  inputStyle,
  ...otherProps
}) {
  return (
    <View style={[styles.container, style]}>
      {icon && (
        <Ionicons
          name={icon}
          size={18}
          color={colors.medium}
          style={[styles.icon, iconStyle]}
        />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        style={[styles.text, inputStyle]}
        {...otherProps}
      />
      {iconRight && (
        <Ionicons
          name={iconRight}
          size={20}
          color={colors.medium}
          onPress={onPressIconRight}
          style={[styles.icon, iconStyle]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 4,
    borderColor: colors.medium,
    borderWidth: 0.4,
    elevation: 1,
    flexDirection: 'row',
    marginVertical: 4,
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  icon: {
    marginHorizontal: 4,
    color: colors.primaryColor,
  },
  text: {
    fontSize: 17,
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default AppTextInput;
