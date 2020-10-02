import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { changeProductQuantity } from '../../../reducers/styleSizeQuantity.js';
import store from '../../../store.js';

var QuantitySelector = (props) => {
  var selectedSku = useSelector((state) => state.sku);
  var skuData = useSelector((state) => state.skuData);
  const styleSize = useSelector((state) => state.styleSize);
  const [range, setRange] = useState([]);

  useEffect(() => {
    var quantityRange = [];
    if (Object.keys(skuData).length != 0) {
      console.log(skuData[selectedSku].quantity);
      for (var i = 1; i < skuData[selectedSku].quantity + 1; i++) {
        if (i > 15) {
          break;
        }
        quantityRange.push(i);
      }
      console.log(quantityRange);
      setRange(quantityRange);
      console.log(range);
    }
  }, [selectedSku]);

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
      disabled={styleSize === ''}
    >
      {styleSize === '' ? <option key='-'>-</option> : null}
      {range.map((quantity) => {
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
