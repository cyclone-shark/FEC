/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {getReviewMetadataForProduct} from '../../../../helpers/apiHelpers'

const ReviewListEntry = ({review}) =>  {
var productId = useSelector((state) => state.productId);
var [avgRating, changeAvgRating] = useState(0);
var rating = review.rating;
console.log(rating)
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
.star-ratings {
  color: #c5c5c5;
  font-size: 25px;
  height: 25px;
  width: 125px;
  margin: 0 10px;
  position: relative;
  text-shadow: 0 1px 0 #a2a2a2;
}
.star-ratings::before {
  content: '★★★★★';
  opacity: .3;
}
.star-ratings::after {
  color: gold;
  content: '★★★★★';
  text-shadow: 0 1px 0 gold;
  position: absolute;
  z-index: 1;
  display: block;
  left: 0;
  top: 0;
  width: ${(rating/5.0) * 100}%;
  overflow: hidden;
}`;
return (
  <div className="w3-display-container" id="starOuterContainer"style={{height: "100px", width: "100%"}}>
    <span className="w3-display-topleft">
        <RatingStyle>
          <div className="star-ratings-css"></div>
        </RatingStyle>
    </span>
  </div>
  );
}

export default ReviewListEntry;