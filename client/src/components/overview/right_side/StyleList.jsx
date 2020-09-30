import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import StyleEntry from './StyleEntry.jsx';
import store from '../../../store.js';
var StyleList = () => {
  var data = useSelector((state) => state.productData.results);
  return (
    <ul>
      {data
        ? data.map((styleData) => {
            return <StyleEntry style={styleData} />;
          })
        : null}
    </ul>
  );
};

export default StyleList;
