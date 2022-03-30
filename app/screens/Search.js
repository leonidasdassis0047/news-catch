import {FlatList, Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Button, Screen, Text, TextInput} from '../components/common';
import {Heading} from '../components/typography';
import {RowContainer} from '../components/utils';
import colors from '../config/colors';
import fonts from '../config/fonts';

import {getLocalTopHeadlines, getTopHeadlines, searchNews} from '../api/index';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchError, setSearchError] = useState({});

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

  const queryForSearchedNews = async function (query) {
    // start spinner
    setSearchError({});
    const result = await searchNews(query);
    if (result?.error) {
      console.log(result?.userSearch);
      setSearchError(result);
      return;
    }
    setSearchResults(result);
    // stop spinner
  };

  const handleSearchSubmit = function () {
    if (!searchQuery) {
      setSearchError({
        ...searchError,
        error: true,
        userSearch: 'Search query is required',
      });
      return;
    }
    queryForSearchedNews(searchQuery);
  };

  const getNews = async function (q) {
    const results = await getLocalTopHeadlines(q);
    setSearchResults(results);
  };

  useEffect(() => {
    // getNews({});

    return () => {};
  }, []);

  return (
    <Screen style={{paddingHorizontal: 0}}>
      {/* search box containing the search form */}

      <View style={styles.searchBox}>
        <Heading style={{fontFamily: fonts.bold}}>Search Articles</Heading>
        <RowContainer
          justifyContent="space-between"
          style={{marginVertical: 0}}>
          <TextInput
            placeholder="Search news ..."
            inputStyle={styles.input}
            onChangeText={text => setSearchQuery(text)}
            style={styles.inputContainer}
          />
          <Button
            title="Go"
            onPress={handleSearchSubmit}
            style={styles.searchButton}
            textStyle={{fontSize: 15.6}}
          />
        </RowContainer>
        {searchError?.error && (
          <Text
            style={{
              paddingVertical: 8,
              fontStyle: 'italic',
              color: colors.error,
            }}>
            No search results: "{searchError?.userSearch}"
          </Text>
        )}
      </View>
      {/*========= search box containing the search form ========*/}

      {/* list of searched items */}
      {!searchResults.length ? (
        <View
          style={{
            backgroundColor: colors.transparent,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: colors.white,
              borderRadius: 8,
              width: '90%',
              height: '50%',
              top: -90,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Heading style={{color: colors.primary}}>No Search Results</Heading>
          </View>
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={item => item._id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.articleContainer}>
              <RowContainer
                justifyContent="space-between"
                style={{marginVertical: 0}}>
                {/* article image comtainer */}
                <View style={styles.imageContainer}>
                  <Image
                    resizeMode="cover"
                    resizeMethod="scale"
                    source={{uri: item.media}}
                    style={styles.image}
                  />
                </View>
                {/* ======== image comtainer ========== */}

                {/* article text container */}
                <View style={styles.textContainer}>
                  <RowContainer
                    justifyContent="space-between"
                    style={{marginVertical: 0}}>
                    <Text style={{fontFamily: fonts.medium}}>{item.topic}</Text>
                    <Text style={{fontSize: 14}}>share</Text>
                  </RowContainer>
                  <Text style={{fontFamily: fonts.bold}} numberOfLines={3}>
                    {item.title}
                  </Text>
                  <Text style={{fontSize: 14}}>{item.clean_url}</Text>
                </View>
                {/* ======== article text container ========= */}
              </RowContainer>
            </View>
          )}
        />
      )}

      {/* ======== list of searched items ========== */}
    </Screen>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {paddingVertical: 4, paddingHorizontal: 8, fontSize: 15.6},
  inputContainer: {borderRadius: 4, flex: 1, marginRight: 12},
  searchBox: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: 4,
    marginBottom: 4,
  },
  searchButton: {width: 'auto', paddingHorizontal: 12, paddingVertical: 4},
  articleContainer: {
    backgroundColor: colors.white,
    marginBottom: 4,
    paddingHorizontal: 4,
    minHeight: 90,
  },
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
});
