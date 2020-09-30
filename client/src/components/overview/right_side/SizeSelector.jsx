import React, { useState, useEffect } from 'react';
import { changeStyleSize } from '../../../reducers/styleSize.js';
import { useSelector } from 'react-redux';
import QuantitySelector from './QuantitySelector';
import store from '../../../store.js';

var SizeSelector = (props) => {
  var sizeList = [];
  var sizeQuantity = {};
  var skuObj = {};
  var styleData = {};
  var selectedStyle = useSelector((state) => state.productStyle);

  if (props.data) {
    for (var i = 0; i < props.data.length; i++) {
      if (props.data[i].style_id === selectedStyle) {
        styleData = props.data[i];
      }
    }

    var skus = styleData.skus;

    for (var key in skus) {
      sizeList.push(skus[key].size);
      sizeQuantity[skus[key].size] = skus[key].quantity;
      skuObj[key] = skus[key].size;
    }
  }

  var updateSize = (e) => {
    store.dispatch(changeStyleSize(e.target.value));
  };

  return (
    <React.Fragment>
      <select
        name='size'
        id='size'
        onChange={(e) => {
          updateSize(e);
        }}
      >
        {sizeList.map((size) => {
          return (
            <option key={size} value={size}>
              {size}
            </option>
          );
        })}
      </select>
      <QuantitySelector quantities={sizeQuantity} />
    </React.Fragment>
  );
};

export default SizeSelector;
