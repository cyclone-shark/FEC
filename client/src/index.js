import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import store from './store.js';
import { Provider } from 'react-redux';

var mountNode = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <App name='jane' />
  </Provider>,
  mountNode
);
