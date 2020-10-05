import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Carousel from './Carousel';

var MainView = () => {
  var mainImage = useSelector((state) => state.currentPhoto);
  return (
    <div className='left-side'>
      <img className='picture' src={mainImage}></img>

      <Carousel />
    </div>
  );
};

export default MainView;
