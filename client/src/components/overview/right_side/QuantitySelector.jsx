import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../../../store.js';

var QuantitySelector = (props) => {
  var selectedSize = useSelector((state) => state.styleSize);
  var availableQuantity = props.quantities[selectedSize];

  var quantityRange = [];

  for (var i = 0; i < availableQuantity; i++) {
    quantityRange.push(i);
  }

  return (
    <select name='quantity' id='quantity'>
      {quantityRange.map((quantity) => {
        return <option value={quantity}>{quantity}</option>;
      })}
    </select>
  );
};

export default QuantitySelector;
