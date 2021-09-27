import React from 'react';
import FlashMessage from 'react-native-flash-message';

//Redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {appReducer} from './App/redux/reducers/rootReducer';
import Navigator from './App/routes';

const store = createStore(appReducer, applyMiddleware(thunk));

const App = () => {
  return <Navigator />;
};

export default () => {
  return (
    <Provider store={store}>
      <App />
      <FlashMessage position="top" />
    </Provider>
  );
};
