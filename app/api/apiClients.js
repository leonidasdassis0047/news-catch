import apisauce from 'apisauce';
import {WEATHER_API_KEY, NEWS_API_KEY} from '../../api-keys';

const WEATHER_API = 'http://api.weatherapi.com/v1';

const NEWS_API = 'https://api.newscatcherapi.com/v2';

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
