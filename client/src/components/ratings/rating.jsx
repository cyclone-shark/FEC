import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getReviewMetadataForProduct } from '../../../../helpers/apiHelpers';
import styled from 'styled-components';

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

  useEffect(() =>  {
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
        text-shadow: 0 1px 0 red;
        position: absolute;
        z-index: 1;
        display: block;
        left: 0;
        top: 0;
        width: ${(avgRating/5.0) * 100}%;
        overflow: hidden;
      }`;
    return (
        <>
          <h1>{avgRating}</h1>
          <RatingStyle>
            <div className="star-ratings-css"></div>
          </RatingStyle>
        </>
    );
  }

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
    <>
      <h1>{avgRating}</h1>
      <RatingStyle>
        <div className='star-ratings-css'></div>
      </RatingStyle>
    </>
  );
};

export default Rating;
