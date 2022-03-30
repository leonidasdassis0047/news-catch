import React from 'react';
import {Image, StyleSheet} from 'react-native';

import colors from '../../config/colors';

const Avatar = ({image, style}) => {
  if (image == undefined) {
    image = require('../../assets/avatar.png');
  }
  return (
    <Image style={[styles.avatar, style]} source={image} resizeMode="cover" />
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.primary,
  },
});
