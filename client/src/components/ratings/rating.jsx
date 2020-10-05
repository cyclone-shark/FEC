import React, { useEffect, useState } from 'react';
import { useSelector  } from 'react-redux';
import { getReviewMetadataForProduct } from '../../../../helpers/apiHelpers';
import './reviews.css';

const Rating = () => {
  var productId = useSelector((state) => state.productId);
  var [metaData, changeMetaData] = useState(0);

  var getAverageRating = () => {
    getReviewMetadataForProduct(productId)
      .then((meta) => {
        // const len = reviews.length;

        var ratings = meta.ratings;
        var numRatings = 0;
        var sumRatings = 0;
        for (var key of Object.keys(ratings))  {
          sumRatings += (Number(key) * ratings[key]);
          numRatings += ratings[key];
        }
        var avg = Math.round((sumRatings/numRatings) * 10) / 10;
        console.log('average is -> ' + avg);
        changeMetaData(avg);
      })
  }
  useEffect(() =>  {
    getAverageRating();
  }, [productId]);

  return (
    <>
      <h1>{metaData}</h1>
      <div className="star-ratings-css" ></div>
    </>
  );
}
export default Rating;