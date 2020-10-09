/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import store from '../store.js';
import OverView from './overview/Overview.jsx';
import StyleList from './overview/right_side/StyleList.jsx';
import { changeProductData } from '../reducers/productData.js';
import { changeReviewData } from '../reducers/reviewData.js';
import { changeReviewMetadata } from '../reducers/reviewMetadata';
import { getProductData } from '../../../helpers/productHelpers.js';
import ReviewList from './ratings/reviewList.jsx';
import Rating from './ratings/rating.jsx';
import RatingBreakdownBars from './ratings/ratingBars.jsx';
import { getReviewsForProduct } from '../../../helpers/apiHelpers.js';
import { getReviewMetadataForProduct } from '../../../helpers/apiHelpers.js';
import QAndA from './QuestionsAndAnswers/QAndA';
import ChangeProduct from './ChangeProduct';

import Stars, { _5Stars } from './ratings/_5Stars';

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
    getReviewMetadataForProduct(1)
      .then((meta) => {
        store.dispatch(changeReviewMetadata(meta));
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <>
        {/* <_5Stars percentage={33}/> */}
        <ChangeProduct />
        <Overiew />
        <QAndA />
        <div className='d'>
          <Rating />
        </div>
      </>
    );
  }
}

export default hot(App);
