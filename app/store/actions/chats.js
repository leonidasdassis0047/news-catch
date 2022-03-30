/**
 * action creators for chats and rooms.
 * */

import {bindActionCreators} from 'redux';
import {chatTypes} from './types';

/**
 * get all the chats for this current user
 */
const getChatRooms = () => {
  return async dispatch => {
    // fetch chats here

    return dispatch({
      type: chatTypes.GET_CHAT_ROOMS,
      payload: '',
    });
  };
};

// binding chats action creators.
export default bindActionCreators({getChatRooms}, dispatch);
