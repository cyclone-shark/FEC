import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeProductStyle } from '../../../reducers/styleId.js';
import { changeStyleData } from '../../../reducers/currentStyleData.js';
import { changeSkuData } from '../../../reducers/skuData.js';
import { changeSKU } from '../../../reducers/sku.js';
import { changeCurrentPhoto } from '../../../reducers/currentPhoto';
import StyleEntry from './StyleEntry.jsx';
import SizeSelector from './SizeSelector.jsx';
import store from '../../../store.js';

var StyleList = () => {
  var data = useSelector((state) => state.productData.results);
  const dispatch = useDispatch();
  //set product style to first prodcut of product id
  useEffect(() => {
    if (data) {
      dispatch(changeCurrentPhoto(data[0].photos[0].url));
      dispatch(changeSkuData(data[0].skus));
      dispatch(changeProductStyle(data[0].style_id));
      dispatch(changeStyleData(data[0]));
    }
  }, [data]);

  return (
    <React.Fragment>
      <ul>
        {data
          ? data.map((styleData) => {
              return <StyleEntry key={styleData.style_id} style={styleData} />;
            })
          : null}
      </ul>
      <SizeSelector />
    </React.Fragment>
  );
};

export default StyleList;
