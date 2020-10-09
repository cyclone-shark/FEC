import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import StyleList from './StyleList.jsx';
import SizeSelector from './SizeSelector.jsx';
import Price from './Price.jsx';
import AddToCart from './AddToCart.jsx';
import ProductName from './ProductName.jsx';
import Rating from '../../ratings/rating.jsx';
import { getReviewMetadataForProduct } from '../../../../../helpers/apiHelpers';
import '../../ratings/styles.css';
import styled from 'styled-components';

var SideView = () => {
  var productId = useSelector((state) => state.productId);
  var [avgRating, changeAvgRating] = useState(0);

  const getAverageRating = () => {
    getReviewMetadataForProduct(productId).then((meta) => {
      // const len = reviews.length;

      var ratings = meta.ratings;
      var numRatings = 0;
      var sumRatings = 0;
      for (var key of Object.keys(ratings)) {
        sumRatings += Number(key) * ratings[key];
        numRatings += ratings[key];
      }
      var avg = Math.round((sumRatings / numRatings) * 10) / 10;
      changeAvgRating(avg);
    });
  };

  useEffect(() => {
    getAverageRating();
  }, [productId]);

  const RatingStyle = styled.div`
    .star-ratings-css {
      unicode-bidi: bidi-override;
      color: #c5c5c5;
      font-size: 25px;
      height: 25px;
      width: 125px;
      margin: 0 auto;
      position: relative;
      text-shadow: 0 1px 0 #a2a2a2;
    }
    .star-ratings-css::before {
      content: '★★★★★';
      opacity: 0.3;
    }
    .star-ratings-css::after {
      color: gold;
      content: '★★★★★';
      text-shadow: 0 1px 0 red;
      position: absolute;
      z-index: 1;
      display: block;
      left: 0;
      top: 0;
      width: ${(avgRating / 5.0) * 100}%;
      overflow: hidden;
    }
  `;

  return (
    <React.Fragment>
      <div className='side-view'>
        <div className='stars'>
          <div className='w3-container'>
            <div className='rating m3-row'>
              <div className='w3-col'>
                <RatingStyle>
                  <div className='star-ratings-css'></div>
                </RatingStyle>
              </div>
            </div>
          </div>
          read all reviews
        </div>
        <ProductName />
        <StyleList />
        <SizeSelector />
        <Price />
        <AddToCart />
      </div>
    </React.Fragment>
  );
};

export default SideView;
