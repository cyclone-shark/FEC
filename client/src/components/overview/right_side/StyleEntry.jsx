import React, { useState, useEffect } from 'react';
import { changeProductStyle } from '../../../reducers/styleId.js';
import { changeStyleData } from '../../../reducers/currentStyleData.js';
import store from '../../../store.js';
var StyleEntry = (props) => {
  var changeData = () => {
    var allStyleData = store.getState().productData.results;
    console.log(allStyleData);
    var styleId = props.style.style_id;
    var styleData = {};

    for (var key in allStyleData) {
      if (styleId === allStyleData[key].style_id) {
        styleData = allStyleData[key];
      }
    }
    store.dispatch(changeProductStyle(styleId));
    store.dispatch(changeStyleData(styleData));
    console.log(props.style);
    //also going to need to change left side
  };

  //to use if we are making axios requests
  var getData = () => {};

  return (
    <li value={props.style.style_id} onClick={(e) => changeData()}>
      {props.style.style_id}
    </li>
  );
};

export default StyleEntry;
