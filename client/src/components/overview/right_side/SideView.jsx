import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import StyleList from './StyleList.jsx';
import SizeSelector from './SizeSelector.jsx';
import Price from './Price.jsx';
import AddToCart from './AddToCart.jsx';
import ProductName from './ProductName.jsx';
import Rating from '../../ratings/rating.jsx';
var SideView = () => {
  return (
    <div className='b'>
      <Rating />
      <ProductName />
      <StyleList />
      <SizeSelector />
      <Price />
      <AddToCart />
    </div>
  );
};

export default SideView;
