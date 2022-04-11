import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Screen, Text} from '../components/common';
import colors from '../config/colors';
import {RowContainer} from '../components/utils';
import {ArticleCard} from '../components/articles';

import {getCurrentWeather, getTopHeadlines} from '../api';
import {saveArticle, getLocationPermission} from '../services';

import useLocation from '../services/useLocation';
import WeatherCard from '../components/weather/WeatherCard';

const categories = [
  'Recent',
  'Local',
  'News',
  'Entertainment',
  'Health',
  'Gaming',
  'Sports',
  'Science',
  'Politics',
  'Business',
  'Finance',
  'Food',
  'World',
  'Beauty',
  'Tech',
];

/**
 * Later, the categories are customized to only this current user's
 * likings, that they set in their profile
 */

const Discover = ({navigation}) => {
  const [articles, setArticles] = useState([]);
  const [realtimeWeather, setRealtimeWeather] = useState({});
  const [locations] = useLocation();

  const getNews = async function () {
    const articles = await getTopHeadlines();
    setArticles(articles);
  };

  const getWeather = async function (q) {
    const currentWeather = await getCurrentWeather(q);
    setRealtimeWeather(currentWeather);
  };

  const handlePress = item => console.log(item.toLowerCase());

  const getLocation = async () => {
    const permission = await getLocationPermission();
    if (!permission) {
      console.log(permission);
      return;
    }
  };

  useEffect(() => {
    getNews();
    getLocation();

    return () => {
      console.log('unmounted discover component');
    };
  }, []);

  if (locations) {
    getWeather(`${locations[0]?.latitude},${locations[0]?.longitude}`);
  }

  const current = realtimeWeather?.current;
  const location = realtimeWeather?.location;
  return (
    <Screen>
      <View style={{flex: 1}}>
        {/* header */}
        <WeatherCard />
        {/* header end */}

        {/* actual news  */}
        <View style={styles.body}>
          {/* categories scroll container */}
          <View style={styles.categoriesContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories.map((item, index) => (
                <Pressable
                  style={styles.pill}
                  key={index}
                  onPress={() => handlePress(item)}>
                  <Text style={styles.category}>{item}</Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
          {/* categories scroll container end */}
          {/* articles container */}
          <FlatList
            data={articles}
            keyExtractor={item => item._id}
            contentContainerStyle={{
              paddingHorizontal: 4,
              paddingVertical: 2,
              paddingBottom: 54,
            }}
            initialNumToRender={20}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <ArticleCard
                article={item}
                handleSave={saveArticle}
                onPress={() =>
                  navigation.navigate('WebViewContent', {article: item})
                }
              />
            )}
          />
          {/* articles container end */}
        </View>
      </View>
    </Screen>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {backgroundColor: colors.light},
  header: {
    height: 80,
    marginVertical: 4,
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 4,
  },
  user: {flex: 1, height: '100%'},
  weather: {flex: 1},
  body: {flex: 1, backgroundColor: colors.transparent},
  categoriesContainer: {backgroundColor: colors.white, paddingVertical: 8},
  category: {fontSize: 15},
  articleContainer: {
    height: 130,
    width: '100%',
    backgroundColor: colors.white,
    marginBottom: 8,
    // paddingHorizontal: 2,
    elevation: 0.4,
    borderRadius: 4,
  },
  image: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    borderRadius: 4,
    // marginBottom: 4,
  },
  smallText: {
    fontSize: 14.5,
  },
  pill: {
    backgroundColor: colors.light,
    borderColor: colors.light,
    borderRadius: 50,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 2,
    marginRight: 8,
  },
});

const article_struct = {
  _id: '7ab48383771b2f472cd0104295fcea7d',
  _score: null,
  author: null,
  authors: [],
  clean_url: 'monitor.co.ug',
  country: 'UG',
  excerpt:
    'We have been able to make our team understand the task which is in front and we have a wonderful team that understands the assignment',
  is_opinion: false,
  language: 'en',
  link: 'https://www.monitor.co.ug/uganda/magazines/people-power/i-don-t-see-any-need-of-discussing-museveni-s-succession-todwong--3754594',
  media:
    'https://www.monitor.co.ug/resource/blob/3754596/9b9e3084d8fde8d307cecf156da180e7/pp05pix-data.jpg',
  published_date: '2022-03-20 15:24:52',
  published_date_precision: 'full',
  rank: 12939,
  rights: 'monitor.co.ug',
  summary:
    "It has been close to eight months since you were appointed NRM secretary general. How has it been so far?First, it's an honour for me to have been nominated by the President to become the secretary general of the NRM party. At this point in time it comes with huge responsibility and a lot of challenges. Knowing the history of the party; membership of the party; period the party has been in office; and achievements of the party all come with a lot of expectations and challenges. It has been the busiest period in my life.",
  title: "I don't see any need of discussing Museveni's succession – Todwong",
  topic: 'news',
  twitter_account: '@DailyMonitor',
};

const weather_struct = {
  current: {
    cloud: 26,
    condition: {
      code: 1003,
      icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
      text: 'Partly cloudy',
    },
    feelslike_c: 31.7,
    feelslike_f: 89.1,
    gust_kph: 11.9,
    gust_mph: 7.4,
    humidity: 40,
    is_day: 1,
    last_updated: '2022-03-21 11:00',
    last_updated_epoch: 1647849600,
    precip_in: 0,
    precip_mm: 0,
    pressure_in: 29.82,
    pressure_mb: 1010,
    temp_c: 31.2,
    temp_f: 88.2,
    uv: 8,
    vis_km: 10,
    vis_miles: 6,
    wind_degree: 175,
    wind_dir: 'S',
    wind_kph: 10.4,
    wind_mph: 6.5,
  },
  location: {
    country: 'Uganda',
    lat: 0.32,
    localtime: '2022-03-21 12:03',
    localtime_epoch: 1647853429,
    lon: 32.57,
    name: 'Namirembe',
    region: 'Kampala',
    tz_id: 'Africa/Kampala',
  },
};
