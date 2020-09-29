import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../../../store.js';

var MainView = () => {
  console.log(useSelector((state) => state.productId));
  console.log(useSelector((state) => state.productData));
  return <div>{store.id}</div>;
};

export default MainView;
