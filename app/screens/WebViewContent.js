import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';

import colors from '../config/colors';
import {Screen} from '../components/common';

const WebViewContent = ({route}) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showLoadingBar, setShowLoadingBar] = useState(true);
  const article = route.params?.article;

  useEffect(() => {
    setLoadingProgress(0);
  }, []);

  return (
    <Screen style={{paddingHorizontal: 0}}>
      <View style={styles.container}>
        {showLoadingBar && (
          <View
            style={{
              height: 6,
              width: `${loadingProgress * 100}%`,
              backgroundColor: colors.primary,
            }}
          />
        )}
        <WebView
          source={{uri: article?.link}}
          onLoadProgress={({nativeEvent}) => {
            setLoadingProgress(nativeEvent.progress);
          }}
          onError={syntheticEvent => {
            const {nativeEvent} = syntheticEvent;
            setLoadingProgress(0);
            setShowLoadingBar(false);
            syntheticEvent.stopPropagation();
          }}
          onLoadEnd={syntheticEvent => {
            setShowLoadingBar(false);
          }}
        />
      </View>
    </Screen>
  );
};

export default WebViewContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
