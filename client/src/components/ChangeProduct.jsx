import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeProductId } from '../reducers/productId';
import { getReviewsForProduct } from '../../../helpers/apiHelpers.js';
import { getProductData } from '../../../helpers/productHelpers.js';
import { changeProductData } from '../reducers/productData.js';
import { changeReviewData } from '../reducers/reviewData.js';
var ChangeProduct = () => {
  var [id, setId] = useState('');
  var dispatch = useDispatch();

  var updateProductId = (id) => {
    dispatch(changeProductId(id));
    getProductData(id)
      .then((data) => {
        //console.log(data);
        dispatch(changeProductData(data));
      })
      .catch((err) => console.error(err));
    getReviewsForProduct(id)
      .then((data) => {
        dispatch(changeReviewData(data));
      })
      .catch((error) => console.log(error));
  };

  var updateId = (value) => {
    //console.log(value);
    setId(value);
  };
  return (
    <div>
      <form>
        Update Product ID:
        <input type='text' onChange={(e) => updateId(e.target.value)}></input>
      </form>
      <button
        onClick={() => {
          updateProductId(id);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default ChangeProduct;
