import React, {useLayoutEffect} from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  DiscoverScreen,
  ProfileScreen,
  SavedArticlesScreen,
  SearchScreen,
  WebViewContentScreen,
} from '../screens/';
import colors from '../config/colors';

const Stack = createNativeStackNavigator();
const TabNavigator = createBottomTabNavigator();

const tabBarStyle = {
  height: 50,
  position: 'absolute',
  bottom: 4,
  borderRadius: 40,
  backgroundColor: colors.white,
  marginHorizontal: 6,
  elevation: 0.8,
  display: 'flex',
};

const DiscoverStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'WebViewContent') {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: tabBarStyle});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator
      screenOptions={{animation: 'slide_from_right', headerShown: false}}>
      <Stack.Screen name="Discover" component={DiscoverScreen} />
      <Stack.Screen name="WebViewContent" component={WebViewContentScreen} />
    </Stack.Navigator>
  );
};

const SearchStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'WebViewContent') {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: tabBarStyle});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator
      screenOptions={{animation: 'slide_from_right', headerShown: false}}>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="WebViewContent" component={WebViewContentScreen} />
    </Stack.Navigator>
  );
};

const SavedArticlesStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'WebViewContent') {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: tabBarStyle});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator
      screenOptions={{animation: 'slide_from_right', headerShown: false}}>
      <Stack.Screen name="SavedArticles" component={SavedArticlesScreen} />
      <Stack.Screen name="WebViewContent" component={WebViewContentScreen} />
    </Stack.Navigator>
  );
};

export default function MainNavigation() {
  return (
    <TabNavigator.Navigator
      initialRouteName="DiscoverStack"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: tabBarStyle,
      }}>
      <TabNavigator.Screen
        name="DiscoverStack"
        component={DiscoverStack}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Ionicons
              name={focused ? 'ios-reader-sharp' : 'ios-reader-outline'}
              size={size}
              color={focused ? colors.primary : colors.dark}
            />
          ),
        }}
      />
      <TabNavigator.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Ionicons
              name={focused ? 'ios-search-sharp' : 'ios-search-outline'}
              size={size}
              color={focused ? colors.primary : colors.dark}
            />
          ),
        }}
      />
      <TabNavigator.Screen
        name="SavedArticlesStack"
        component={SavedArticlesStack}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Ionicons
              name={focused ? 'ios-heart' : 'ios-heart-outline'}
              size={size}
              color={focused ? colors.primary : colors.dark}
            />
          ),
        }}
      />
      {/* <TabNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <Ionicons
              name="ios-person-outline"
              size={size}
              color={focused ? colors.primary : colors.dark}
            />
          ),
        }}
      /> */}
    </TabNavigator.Navigator>
  );
}
