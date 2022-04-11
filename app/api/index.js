import {newsClient, weatherClient} from './apiClients';

// get the top headlines.
export const getTopHeadlines = async function (params) {
  const newsResults = await newsClient.get('/latest_headlines', {
    countries: 'ug',
    lang: 'en',
  });
  if (!newsResults.ok) {
    // dispatch to redux to give an error to the client
    console.log('Top headlines:', newsResults.problem);
    return;
  }

  return newsResults.data.articles;
};

// get the top headlines.
export const getLocalTopHeadlines = async function (params) {
  const newsResults = await newsClient.get('/latest_headlines', {
    countries: 'ug',
  });
  if (!newsResults.ok) {
    // dispatch to redux to give an error to the client
    return console.log('Local top headlines:', newsResults.problem);
  }
  //   console.log(newsResults.data.articles);
  return newsResults.data.articles;
};

// search the news
export const searchNews = async function (searchQuery) {
  const results = await newsClient.get('/search', {q: searchQuery});

  if (!results.ok) {
    // dispatch to redux to give an error to the client
    console.log(results.problem);
    return;
  }
  if (results.data.status !== 'ok') {
    const err = {error: true, userSearch: results.data.user_input.q};
    // console.log(err);
    return err;
  }

  return results.data.articles;
};

// get the realtime current weather.
export const getCurrentWeather = async function (query) {
  const results = await weatherClient.get('/current.json', {
    // q: '0.32,32.57',
    q: query,
  });

  if (!results.ok) {
    // dispatch to redux to give an error to the client
    console.log('weather call:', results.originalError);
    return;
  }

  // console.log(results.data);
  return results.data;
};

const struct = {
  page: 0,
  page_size: 0,
  status: 'No matches for your search.',
  total_hits: 0,
  total_pages: 0,
  user_input: {
    countries: null,
    from: '2022-03-16 00:00:00',
    from_rank: null,
    lang: ['en'],
    not_countries: null,
    not_lang: null,
    not_sources: null,
    page: 1,
    published_date_precision: null,
    q: 'Gfgg',
    ranked_only: 'True',
    search_in: ['title_summary_en'],
    size: 50,
    sort_by: 'relevancy',
    sources: null,
    to: null,
    to_rank: null,
    topic: null,
  },
};
