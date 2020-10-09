import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getReviewMetadataForProduct } from '../../../../helpers/apiHelpers';
import './styles.css';
import styled from 'styled-components';
import RatingBars from './ratingBars';
import ReviewList  from './reviewList'

export const Rating = () => {
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
        opacity: .3;
      }
      .star-ratings-css::after {
        color: gold;
        content: '★★★★★';
        text-shadow: 0 1px 0 gold;
        position: absolute;
        z-index: 1;
        display: block;
        left: 0;
        top: 0;
        width: ${(avgRating/5.0) * 100}%;
        overflow: auto;
      }`;
    return (
        <div className="w3-container" style={{width: "100%"}}><h1>Ratings and Reviews</h1>
          <div className="w3-container m3-row">
            <div className="w3-cell" width={{width: "30%"}}>
                <RatingStyle>
                  <center><div className="star-ratings-css"></div></center>
                  <center><h1><div className="m3-cell">{avgRating}</div></h1></center>
                </RatingStyle>
                <RatingBars/>
            </div>
            <div className="w3-col" width={{width: "50%"}}>
              <ReviewList/>
            </div>
          </div>
        </div>
    );
  }

export default Rating;
