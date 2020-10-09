import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RatingsProgressBar from './ratingsProgessBar';
import { getReviewMetadataForProduct } from '../../../../helpers/apiHelpers';
import store from '../../store.js';
import { changeReviewData } from '../../reducers/reviewMetadata';
import { changeReviewMetadata } from '../../reducers/reviewMetadata';

import _ from 'lodash';

const RatingBars = () => {
  var ratings = useSelector((state) => state.reviewMetadata.ratings);
  var productId = useSelector((state) => state.productId);
  var [ratingTotal, setRatingTotal] = useState(0);

  useEffect(() => {
    getReviewMetadataForProduct(productId)
      .then((metaData) => {
        var total = 0;
        for (var [key, value] of Object.entries(metaData.ratings)) {
          if (value) {
            total = total + value;
          }
        }
        store.dispatch(changeReviewMetadata(metaData));
        setRatingTotal(total);
      })
      .catch((err) => console.error(err));
  }, [productId]); //ran when productId changes

  return (
    <div className='w3-bar-block' style={{ width: '50%' }}>
      {ratings
        ? [1, 2, 3, 4, 5].map((value) => {
            return (
              <>
                {ratings[value] ? (
                  <div className='w3-bar-item'>
                    <a>{value} Stars</a>
                    <RatingsProgressBar
                      percentage={(ratings[value] / ratingTotal) * 100}
                    />
                    <br />
                  </div>
                ) : null}
              </>
            );
          })
        : null}
    </div>
  );
};

export default RatingBars;
