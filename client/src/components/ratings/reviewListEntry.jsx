/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {getReviewMetadataForProduct} from '../../../../helpers/apiHelpers';
import Moment from 'react-moment';
import 'moment-timezone';

const ReviewListEntry = ({review}) =>  {
var productId = useSelector((state) => state.productId);
var [avgRating, changeAvgRating] = useState(0);
var [rating, setRating] = useState(review.rating);
var [review, setReview]  = useState(review);
console.log('rating --->', rating);
console.log(rating);
const getAverageRating = () => {
  getReviewMetadataForProduct(productId).then((meta) => {
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
  <div className="w3-display-container w3-border-bottom" style={{height: "200px", width: "45%"}}>
    <div style={{padding: '5px'}}>
      <div className="w3-display-topleft">
        <RatingStyle>
              <div className="star-ratings"></div>
        </RatingStyle>
      </div>
      <div className="w3-display-topright">
        {review.reviewer_name}, <Moment format="MMMM 1, YYYY">{review.date}</Moment>
      </div>
      <div className="w3-display-bottomleft">
        {'Was this review heplful?'} Yes(<a>{review.helpfulness}</a>) | <a>Report</a>
      </div>
      <div className="w3-display-middle">
        {review.body}
      </div>
      <div className="w3-display-topmiddle">
        <br/>
        <br/>
        <b>{review.summary}</b>
      </div>
    </div>
  </div>
  );
}

export default ReviewListEntry;

