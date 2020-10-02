import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeProductStyle } from '../../../reducers/styleId.js';
import { changeStyleData } from '../../../reducers/currentStyleData.js';
import { changeSkuData } from '../../../reducers/skuData.js';
import { changeSKU } from '../../../reducers/sku.js';
var StyleEntry = (props) => {
  //when i click a new entry I want to update the current sku with the selected styleSize and product style
  const dispatch = useDispatch();
  const allStyleData = useSelector((state) => state.productData.results);
  const selectedSize = useSelector((state) => state.styleSize);

  var changeData = () => {
    var styleId = props.style.style_id;
    var styleData = {};

    for (var key in allStyleData) {
      if (styleId === allStyleData[key].style_id) {
        styleData = allStyleData[key];
      }
    }
    dispatch(changeSkuData(styleData.skus));
    dispatch(changeProductStyle(styleId));
    dispatch(changeStyleData(styleData));

    var skuObj = styleData.skus;
    if (selectedSize != '') {
      console.log(selectedSize);
      updateCurrSKU(skuObj, selectedSize);
    }
  };

  var updateCurrSKU = (skuObj, size) => {
    for (var key in skuObj) {
      if (skuObj[key].size === size) {
        console.log('here');
        dispatch(changeSKU(key));
      }
    }
  };

  return (
    <li value={props.style.style_id} onClick={(e) => changeData()}>
      {props.style.style_id}
    </li>
  );
};

export default StyleEntry;
