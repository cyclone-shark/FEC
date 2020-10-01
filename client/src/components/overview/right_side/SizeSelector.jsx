import React, { useState, useEffect } from 'react';
import { changeStyleSize } from '../../../reducers/styleSize.js';
import { changeSKU } from '../../../reducers/sku.js';
import { changeProductQuantity } from '../../../reducers/styleSizeQuantity.js';
import { useSelector, useDispatch } from 'react-redux';
import QuantitySelector from './QuantitySelector';

const SizeSelector = (props) => {
  const dispatch = useDispatch();
  const skuData = useSelector((state) => state.skuData);
  const [sizes, setSizes] = useState([]);
  const sizeList = [];

  useEffect(() => {
    for (var key in skuData) {
      sizeList.push(skuData[key].size);
    }
    setSizes(sizeList);
  }, [skuData]);

  var updateCurrSKU = (skuObj, size) => {
    for (var key in skuObj) {
      if (skuObj[key].size === size) {
        dispatch(changeSKU(key));
      }
    }
  };

  var updateSizeAndSku = (size) => {
    // if (maxQuantity < currQuantity) {
    //   dispatch(changeProductQuantity(0));
    // }
    dispatch(changeStyleSize(size));
    updateCurrSKU(skuData, size);
  };

  return (
    <React.Fragment>
      <select
        id='size'
        onChange={(e) => {
          updateSizeAndSku(e.target.value);
        }}
      >
        <option name='default' value='default'>
          Select Size
        </option>
        {sizes.map((size) => {
          return (
            <option name={'sku' + size} value={size}>
              {size}
            </option>
          );
        })}
      </select>
      {/* quantities = {'M': 7, etc...} */}
      {/* <QuantitySelector /> */}
    </React.Fragment>
  );
};

export default SizeSelector;
