import React, { useState, useEffect } from 'react';
import { changeProductStyle } from '../../../reducers/styleId.js';
import store from '../../../store.js';
var StyleEntry = (props) => {
  var changeData = () => {
    store.dispatch(changeProductStyle(props.style.style_id));
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
