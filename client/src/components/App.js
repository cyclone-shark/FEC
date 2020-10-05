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
import ReviewList from './ratings/reviewList.jsx';
import Rating from './ratings/rating.jsx';
import RatingBar from './ratings/ratingBar.jsx';
import { getReviewsForProduct } from '../../../helpers/apiHelpers.js';
import QAndA from './QuestionsAndAnswers/QAndA';
import ChangeProduct from './ChangeProduct';
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
      .catch((error) => console.log(error));
  }

  render() {
    const { name } = this.props;
    return (
      <>
        <ChangeProduct />
        <OverView />
        <ReviewList />
        <Rating />
        <RatingBar />
        <h1>Hello {name}</h1>

        <QAndA />
      </>
    );
  }
}

export default hot(App);
