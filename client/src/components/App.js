
import React from "react";
import { hot } from 'react-hot-loader/root';
// import { configureStore, createSlice } from '@reduxjs/toolkit';
import store from '../store.js';
import { changeProductId } from '../reducers/productIdSlice.js';


store.dispatch(changeProductId(4));
console.log(changeProductId(9));
console.log('Hello');
class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
      </>
    );
  }
}

export default hot(App);
