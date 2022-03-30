import {StyleSheet, View, ScrollView, FlatList, Image} from 'react-native';
import React from 'react';
import {Screen, Text} from '../components/common';
import {Heading, TextLink} from '../components/typography';
import colors from '../config/colors';
import {RowContainer} from '../components/utils';
import fonts from '../config/fonts';

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
  'Beauty','Tech'
];

/**
 * Later, the categories are customized to only this current user's
 * likings, that they set in their profile
 */

const Discover = ({articles, realtime_weather}) => {
  // const {current, location} = realtime_weather;
  const current = realtime_weather?.current;
  const location = realtime_weather?.location;
  return (
    <Screen>
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <RowContainer justifyContent="space-between">
            <View style={styles.weather}>
              <RowContainer
                justifyContent="flex-start"
                style={{marginVertical: 0}}>
                <Image
                  style={{width: 40, height: 40, marginRight: 8}}
                  source={{uri: `https:${current?.condition?.icon}`}}
                />
                <Text style={styles.smallText}>{current?.temp_c} C</Text>
              </RowContainer>
              <Text style={styles.smallText}>{current?.condition?.text}</Text>
            </View>
            <View style={styles.user}>
              <Heading style={{textAlign: 'right'}}>Leonidas</Heading>
              <RowContainer justifyContent="flex-end">
                <Text style={styles.smallText}>{location?.name},</Text>
                <Text style={[styles.smallText, {marginLeft: 4}]}>
                  {location?.region}
                </Text>
              </RowContainer>
              <Text style={[styles.smallText, {textAlign: 'right'}]}>
                {location?.localtime}
              </Text>
            </View>
          </RowContainer>
        </View>
        {/* actual news  */}
        <View style={styles.body}>
          {/* categories scroll container */}
          <View style={styles.categoriesContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories.map((item, index) => (
                <View style={styles.pill} key={index}>
                  <Text style={styles.category}>{item}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
          {/* categories scroll container end */}
          {/* articles container */}
          <FlatList
            data={articles}
            keyExtractor={item => item._id}
            contentContainerStyle={{paddingHorizontal: 4, paddingVertical: 2}}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View key={item._id} style={styles.articleContainer}>
                <RowContainer
                  style={{height: '100%', width: '100%', marginVertical: 0}}>
                  <View
                    style={{height: '100%', width: 130, overflow: 'hidden'}}>
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={{uri: item.media}}
                    />
                  </View>
                  <View style={{height: '100%', flex: 1, paddingHorizontal: 8}}>
                    <RowContainer
                      justifyContent="space-between"
                      style={{marginVertical: 0}}>
                      <Text style={{fontFamily: fonts.bold}}>{item.topic}</Text>
                      <Text style={{fontSize: 14}}>share</Text>
                    </RowContainer>
                    <Text style={{fontFamily: fonts.bold}} numberOfLines={4}>
                      {item.title}
                    </Text>
                    <Text style={{fontSize: 14}}>{item.clean_url}</Text>
                  </View>
                </RowContainer>
              </View>
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
    height: 120,
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
