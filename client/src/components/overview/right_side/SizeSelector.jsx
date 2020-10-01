import React, { useState, useEffect } from 'react';
import { changeStyleSize } from '../../../reducers/styleSize.js';
import { changeSKU } from '../../../reducers/sku.js';
import { changeProductQuantity } from '../../../reducers/styleSizeQuantity.js';
import { useSelector } from 'react-redux';
import QuantitySelector from './QuantitySelector';
import store from '../../../store.js';

var SizeSelector = (props) => {
  var skuList = [];
  var sizeQuantity = {};
  var styleData = {};
  var skusObj = {};
  var selectedStyle = useSelector((state) => state.productStyle);
  var currQuantity = useSelector((state) => state.styleQuantity);

  if (props.data) {
    for (var i = 0; i < props.data.length; i++) {
      if (props.data[i].style_id === selectedStyle) {
        styleData = props.data[i];
      }
    }

    var skus = styleData.skus;

    for (var key in skus) {
      var skuObj = {};
      skuObj[key] = skus[key].size;
      skusObj[skus[key].size] = key;
      skuList.push(skuObj);
      //{'M': 7, etc...}
      sizeQuantity[skus[key].size] = skus[key].quantity;
    }
  }

  var getSku = (skus, size) => {
    return skus[size];
  };

  var updateSizeAndSkuAndQuantity = (size) => {
    var sku = getSku(skusObj, size);
    var maxQuantity = skus[sku].quantity;

    //need to update quantity if less than currently selected
    if (maxQuantity < currQuantity) {
      store.dispatch(changeProductQuantity(0));
    }
    store.dispatch(changeSKU(sku));
    store.dispatch(changeStyleSize(e.target.value));
  };

  // useEffect(() => {
  //   updateSizeAndSkuAndQuantity(0);
  // }, [selectedStyle]);

  return (
    <React.Fragment>
      <select
        id='size'
        onChange={(e) => {
          updateSizeAndSkuAndQuantity(e.target.value);
        }}
      >
        {skuList.map((sku) => {
          return (
            <option
              name={'sku' + Object.keys(sku)[0]}
              value={Object.values(sku)[0]}
            >
              {Object.values(sku)[0]}
            </option>
          );
        })}
      </select>
      {/* quantities = {'M': 7, etc...} */}
      <QuantitySelector quantities={sizeQuantity} />
    </React.Fragment>
  );
};

export default SizeSelector;
