import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StyleEntry from './StyleEntry.jsx';
import SizeSelector from './SizeSelector.jsx';
import store from '../../../store.js';

var StyleList = () => {
  var data = useSelector((state) => state.productData.results);

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
