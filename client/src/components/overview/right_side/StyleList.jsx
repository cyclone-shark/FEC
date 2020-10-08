import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeProductStyle } from '../../../reducers/styleId.js';
import { changeStyleData } from '../../../reducers/currentStyleData.js';
import { changeSkuData } from '../../../reducers/skuData.js';
import { changeSKU } from '../../../reducers/sku.js';
import { changeCurrentPhoto } from '../../../reducers/currentPhoto';
import { changePhotoIndex } from '../../../reducers/photoIndex';
import StyleEntry from './StyleEntry.jsx';

import store from '../../../store.js';

var StyleList = () => {
  var data = useSelector((state) => state.productData.results);
  const dispatch = useDispatch();
  //set product style to first prodcut of product id
  const currentStyle = useSelector((state) => state.styleData.name);
  useEffect(() => {
    if (data) {
      dispatch(changePhotoIndex(0));
      dispatch(changeCurrentPhoto(data[0].photos[0].url));
      dispatch(changeSkuData(data[0].skus));
      dispatch(changeProductStyle(data[0].style_id));
      dispatch(changeStyleData(data[0]));
    }
  }, [data]);

  return (
    <React.Fragment>
      <div class='style-info'>STYLE > {currentStyle}</div>
      <div class='style-list'>
        {data
          ? data.map((styleData) => {
              return <StyleEntry key={styleData.style_id} style={styleData} />;
            })
          : null}
      </div>
    </React.Fragment>
  );
};

export default StyleList;
