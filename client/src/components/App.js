/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import store from '../store.js';

import OverView from './overview/OverView.jsx';
import StyleList from './overview/right_side/StyleList.jsx';
import { changeProductData } from '../reducers/productData.js';
import { changeReviewData } from '../reducers/reviewData.js';
import { getProductData } from '../../../helpers/productHelpers.js';
import exampleData from '../../../exampleData/product_data.json';
import ReviewList from './ratings/reviewList.jsx';
import Rating from './ratings/rating.jsx';
import RatingBar from './ratings/ratingBar.jsx';
import { getReviewsForProduct } from '../../../helpers/apiHelpers.js'

// store.dispatch(changeProductId(4));
// console.log(store.getState());
// console.log(changeProductId(9));
// console.log(store.getState());

class App extends React.Component {
  componentDidMount() {
    getProductData(1)
      .then((data) => {
        store.dispatch(changeProductData(data));
      })
      .catch((err) => console.error(err));
    getReviewsForProduct(1)
      .then((data) => { 
        store.dispatch(changeReviewData(data));
      })
      .catch(error => console.log(error)); 
  }

  render() {
    const { name } = this.props;
    return (
      <>
        <MainView />
        <StyleList />
        <ReviewList /> 
        <Rating />
        <RatingBar />
        <h1>Hello {name}</h1>
        <OverView />
      </>
    );
  }
}

export default hot(App);
