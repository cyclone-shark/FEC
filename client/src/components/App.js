import React from 'react';
import { useSelector } from 'react-redux';
import { hot } from 'react-hot-loader/root';
// import { configureStore, createSlice } from '@reduxjs/toolkit';
import store from '../store.js';
import { changeProductId } from '../reducers/productIdSlice.js';
import { changeProductStyle } from '../reducers/productStyle.js';
import MainView from './overview/left_side/MainView.jsx';

// store.dispatch(changeProductId(4));
// console.log(store.getState());
// console.log(changeProductId(9));
// console.log(store.getState());

console.log(store.getState());
store.dispatch(changeProductStyle(4));
console.log(changeProductStyle(9));
console.log(store.getState().productId);

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>Hello {name}</h1>
        <MainView />
      </>
    );
  }
}

export default hot(App);
