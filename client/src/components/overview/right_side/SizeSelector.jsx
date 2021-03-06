import React, { useState, useEffect } from 'react';
import { changeStyleSize } from '../../../reducers/styleSize.js';
import { changeSKU } from '../../../reducers/sku.js';
import { changeProductQuantity } from '../../../reducers/styleSizeQuantity.js';
import { useSelector, useDispatch } from 'react-redux';
import QuantitySelector from './QuantitySelector';

const SizeSelector = (props) => {
  const dispatch = useDispatch();
  const skuData = useSelector((state) => state.skuData);
  const styleQuantity = useSelector((state) => state.styleQuantity);
  const size = useSelector((state) => state.styleSize);
  const [sizes, setSizes] = useState([]);
  const sizeList = [];

  useEffect(() => {
    for (var key in skuData) {
      sizeList.push(skuData[key].size);
    }
    setSizes(sizeList);
    updateCurrSKU(skuData, size);
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
    if (styleQuantity === '-') {
      dispatch(changeProductQuantity(1));
    }
    dispatch(changeStyleSize(size));
    updateCurrSKU(skuData, size);
  };

  return (
    <React.Fragment>
      <div className='size'>
        <select
          id='size'
          onChange={(e) => {
            updateSizeAndSku(e.target.value);
          }}
        >
          <option name='default' value=''>
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
        <QuantitySelector />
      </div>
    </React.Fragment>
  );
};

export default SizeSelector;
