import apisauce from 'apisauce';

const WEATHER_API = 'http://api.weatherapi.com/v1';
const WEATHER_API_KEY = 'c8d35ca2772a4584be8123913221803';

const NEWS_API = 'https://api.newscatcherapi.com/v2';
const NEWS_API_KEY = 'sqVRs6Uf8jK5Jkbk1lqjymEY9Ffy_UJg-gsJ9o0Iu0I';

const weatherClient = apisauce.create({
  baseURL: WEATHER_API,
  params: {key: WEATHER_API_KEY, aqi: 'no'},
});

const newsClient = apisauce.create({
  baseURL: NEWS_API,
  headers: {'x-api-key': NEWS_API_KEY},
  params: {lang: 'en'},
});

apisauce.CancelToken;

export {newsClient, weatherClient};
