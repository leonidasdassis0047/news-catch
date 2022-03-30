import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider as ReactReduxProvider} from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));

const Provider = ({children}) => {
  return <ReactReduxProvider store={store}>{children}</ReactReduxProvider>;
};

export default Provider;
