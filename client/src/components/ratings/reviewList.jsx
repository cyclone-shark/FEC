/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
// import { getReviewsForProduct } from '../../../helpers/apiHelpers.js';
import { useSelector } from 'react-redux';
import ReviewListEntry from './reviewListEntry';


const ReviewList = () => {
    const reviews = useSelector((state) => state.reviewData.results);
    console.log(reviews);
    return (
      <ul>
        {reviews
          ? reviews.map((review) => {
              return <ReviewListEntry review={review} />;
            })
          : null}
      </ul>
    );
};

export default ReviewList;