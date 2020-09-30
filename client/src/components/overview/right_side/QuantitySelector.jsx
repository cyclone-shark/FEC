import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { changeProductQuantity } from '../../../reducers/styleSizeQuantity.js';
import store from '../../../store.js';

var QuantitySelector = (props) => {
  var selectedSize = useSelector((state) => state.styleSize);
  var availableQuantity = props.quantities[selectedSize];

  var quantityRange = [];

  for (var i = 0; i < availableQuantity; i++) {
    quantityRange.push(i);
  }

  var updateQuantity = (e) => {
    store.dispatch(changeProductQuantity(e.target.value));
  };

  return (
    <select
      name='quantity'
      id='quantity'
      onChange={(e) => {
        updateQuantity(e);
      }}
    >
      {quantityRange.map((quantity) => {
        return (
          <option key={'quantity ' + quantity} value={quantity}>
            {quantity}
          </option>
        );
      })}
    </select>
  );
};

export default QuantitySelector;
