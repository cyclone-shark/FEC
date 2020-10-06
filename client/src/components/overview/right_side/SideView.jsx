import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import StyleList from './StyleList.jsx';
import SizeSelector from './SizeSelector.jsx';
import Price from './Price.jsx';
import AddToCart from './AddToCart.jsx';
var SideView = () => {
  return (
    <div className='b'>
      <StyleList />
      <SizeSelector />
      <Price />
      <AddToCart />
    </div>
  );
};

export default SideView;
