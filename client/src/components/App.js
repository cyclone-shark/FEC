import React from 'react';
import { useSelector } from 'react-redux';
import { hot } from 'react-hot-loader/root';
// import { configureStore, createSlice } from '@reduxjs/toolkit';
import store from '../store.js';
import MainView from './overview/left_side/MainView.jsx';
import StyleList from './overview/right_side/StyleList.jsx';
import { getProductData } from '../../../helpers/productHelpers.js';
// store.dispatch(changeProductId(4));
// console.log(store.getState());
// console.log(changeProductId(9));
// console.log(store.getState());

class App extends React.Component {
  render() {
    console.log(getProductData(1));
    const { name } = this.props;
    return (
      <>
        <h1>Hello {name}</h1>
        <MainView />
        <StyleList />
      </>
    );
  }
}

export default hot(App);
