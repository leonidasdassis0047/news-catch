import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import fonts from '../config/fonts';
import colors from '../config/colors';
import {Screen, Text} from '../components/common';
import {Heading} from '../components/typography';
import {ArticleCard} from '../components/articles';
import {saveArticle} from '../services';

const SavedArticles = ({navigation}) => {
  const [savedArticles, setSavedArticles] = useState([]);

  const getSavedArticles = async () => {
    let savedArticles = await AsyncStorage.getItem('articles');
    savedArticles = savedArticles !== null ? JSON.parse(savedArticles) : null;

    if (!savedArticles) return;
    setSavedArticles(savedArticles);
  };

  const handleSave = async article => {
    await saveArticle(article);
  };

  useEffect(() => {
    getSavedArticles();
  }, [navigation, savedArticles]);

  return (
    <Screen style={{backgroundColor: colors.white}}>
      <Heading style={{fontFamily: fonts.bold, color: colors.primary}}>
        Saved News Articles
      </Heading>

      {!savedArticles.length ? (
        <View
          style={{
            backgroundColor: colors.transparent,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Pressable
            style={{
              backgroundColor: colors.white,
              borderRadius: 8,
              width: '100%',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: colors.primary}}>no articles saved yet</Text>
          </Pressable>
        </View>
      ) : (
        <FlatList
          data={savedArticles}
          keyExtractor={item => item._id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <ArticleCard
              article={item}
              onPress={() =>
                navigation.navigate('WebViewContent', {article: item})
              }
              handleSave={handleSave}
              saved={true}
            />
          )}
        />
      )}
    </Screen>
  );
};

export default SavedArticles;

const styles = StyleSheet.create({});
