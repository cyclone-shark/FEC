import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Carousel from './Carousel';

var MainView = () => {
  var mainImage = useSelector((state) => state.currentPhoto);
  return (
    <React.Fragment>
      <div className='a'>
        <img className='picture' src={mainImage}></img>
      </div>
      <div className='c'>
        <Carousel />
      </div>
    </React.Fragment>
  );
};

export default MainView;
