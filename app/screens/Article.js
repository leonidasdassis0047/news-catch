import {StyleSheet, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {Button, Screen, Text} from '../components/common';
import colors from '../config/colors';
import {Heading} from '../components/typography';
import {Divider, RowContainer} from '../components/utils';
import fonts from '../config/fonts';

const Article = ({article}) => {
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <Image source={{uri: article.media}} style={styles.image} />
        <View style={styles.body}>
          <View style={styles.metadataContainer}>
            <RowContainer
              justifyContent="space-between"
              style={{paddingHorizontal: 4}}>
              <Button
                title={article.topic}
                style={styles.topicButton}
                textStyle={styles.topicText}
              />
              <Text>{article.rank}</Text>
            </RowContainer>
            <Heading>{article.title}</Heading>
            <RowContainer justifyContent="space-between">
              <Text style={{fontSize: 14}}>{article.clean_url}</Text>
              <Text style={{fontSize: 14}}>share</Text>
            </RowContainer>
            <Divider />
          </View>
          {/* metadata container end*/}

          {/* summary of the article */}
          <Text style={styles.excerpt}>{article.excerpt}</Text>
          <Text style={styles.summary}>{article.summary}</Text>
        </View>
      </ScrollView>
      <Button title="Read more ..." style={styles.readMoreButton} />
    </Screen>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    backgroundColor: colors.white,
  },
  image: {
    height: 260,
    width: '100%',
    overflow: 'hidden',
    borderRadius: 4,
    // marginBottom: 4,
  },
  body: {
    paddingHorizontal: 4,
  },
  metadataContainer: {
    paddingVertical: 2,
  },
  linksContainer: {},
  excerpt: {lineHeight: 20, marginVertical: 8},
  summary: {
    lineHeight: 20,
    marginVertical: 4,
  },
  topicButton: {
    width: 'auto',
    paddingVertical: 2,
    paddingHorizontal: 12,
  },
  topicText: {
    fontSize: 15,
    fontFamily: fonts.medium,
  },
  readMoreButton: {
    position: 'absolute',
    bottom: 0,
    marginVertical: 0,
    borderRadius: 0,
  },
});
