import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { changeProductQuantity } from '../../../reducers/styleSizeQuantity.js';
import store from '../../../store.js';

var QuantitySelector = (props) => {
  var quantityRange = [];
  var availableQuantity;
  var selectedSize = useSelector((state) => state.styleSize);

  availableQuantity = props.quantities[selectedSize];
  quantityRange = [];

  for (var i = 0; i < availableQuantity + 1; i++) {
    quantityRange.push(i);
  }

  useEffect(() => {
    availableQuantity = props.quantities[selectedSize];
    quantityRange = [];

    for (var i = 0; i < availableQuantity + 1; i++) {
      quantityRange.push(i);
    }
  }, [props]);

  var updateQuantity = (quantity) => {
    store.dispatch(changeProductQuantity(quantity));
  };

  return (
    <select
      name='quantity'
      id='quantity'
      onChange={(e) => {
        updateQuantity(e.target.value);
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
