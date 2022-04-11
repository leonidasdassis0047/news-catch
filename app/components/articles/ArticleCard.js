import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Text} from '../common';
import {RowContainer} from '../utils';
import colors from '../../config/colors';
import fonts from '../../config/fonts';

const ArticleContainer = ({article, onPress, handleSave, saved}) => {
  return (
    <Pressable onPress={onPress} style={styles.articleContainer}>
      <RowContainer justifyContent="space-between" style={{marginVertical: 0}}>
        {/* article image comtainer */}
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            resizeMethod="scale"
            source={{uri: article.media !== '' ? article.media : undefined}}
            style={styles.image}
          />
        </View>
        {/* ======== image comtainer ========== */}

        {/* article text container */}
        <View style={styles.textContainer}>
          <RowContainer
            justifyContent="space-between"
            style={{marginVertical: 0}}>
            <Text style={styles.topic}>{article.topic}</Text>
            <SaveIcon onPress={() => handleSave(article)} saved={saved} />
          </RowContainer>
          <Text style={styles.title} numberOfLines={3}>
            {article.title}
          </Text>
          <Text style={styles.articleCleanUrl}>{article.clean_url}</Text>
        </View>
        {/* ======== article text container ========= */}
      </RowContainer>
    </Pressable>
  );
};

const SaveIcon = ({onPress, saved}) => {
  return (
    <Pressable style={styles.saveContainer} onPress={onPress}>
      <Ionicons
        name={saved ? 'ios-heart' : 'ios-heart-outline'}
        size={14}
        color={colors.primary}
      />
    </Pressable>
  );
};

export default ArticleContainer;

const styles = StyleSheet.create({
  articleContainer: {
    backgroundColor: colors.white,
    marginBottom: 4,
    paddingHorizontal: 4,
    minHeight: 90,
    elevation: 0.5,
  },
  articleCleanUrl: {fontSize: 13.5, color: 'orange'},
  image: {height: '100%', width: '100%'},
  imageContainer: {
    height: 80,
    width: 80,
    borderRadius: 4,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.light,

    alignSelf: 'flex-start',
    top: 8,
  },
  textContainer: {height: '100%', flex: 1, paddingLeft: 8},
  title: {fontFamily: fonts.bold, fontSize: 15},
  topic: {fontFamily: fonts.medium, color: colors.primary},
  saveContainer: {
    backgroundColor: colors.white,
    borderColor: colors.light,
    borderRadius: 50,
    borderWidth: 1,
    paddingHorizontal: 8,
    // width: 30,
    // height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
