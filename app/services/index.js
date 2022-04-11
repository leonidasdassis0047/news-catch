import AsyncStorage from '@react-native-async-storage/async-storage';
import RNLocation from 'react-native-location';

export const saveArticle = async article => {
  try {
    let articlesArr = [];
    let savedArticles = await AsyncStorage.getItem('articles');
    savedArticles = savedArticles !== null ? JSON.parse(savedArticles) : null;
    // console.log(savedArticles?.length);

    if (!savedArticles) {
      articlesArr.push(article);
      await AsyncStorage.setItem('articles', JSON.stringify(articlesArr));
    }

    if (savedArticles !== null) {
      const found = savedArticles.find(
        savedArticle => savedArticle._id === article._id,
      );
      if (found) {
        articlesArr = savedArticles.filter(
          savedArticle => savedArticle._id !== article._id,
        );
        await AsyncStorage.setItem('articles', JSON.stringify(articlesArr));
        return;
      }
    }

    articlesArr = savedArticles;
    articlesArr.push(article);
    await AsyncStorage.setItem('articles', JSON.stringify(articlesArr));
    // // await AsyncStorage.removeItem('articles');
  } catch (error) {
    console.log(error.message);
  }
};

export const getLocationPermission = async () => {
  RNLocation.configure({
    distanceFilter: 5.0,
  });
  let permission = false;
  permission = await RNLocation.checkPermission({
    ios: 'whenInUse',
    android: {detail: 'fine'},
  });
  if (!permission) {
    permission = await RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {detail: 'fine'},
    });
  }

  return permission;
};
