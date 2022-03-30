import {combineReducers} from 'redux';

import {chatTypes} from '../actions/types';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const chatReducer = (state = {}, action) => {
  switch (action.type) {
    case chatTypes.GET_CHAT_ROOMS:
      return state;
    default:
      return state;
  }
};

export default combineReducers({auth: authReducer, chat: chatReducer});
