import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CarouselEntry from './CarouselEntry';
import { changeCarouselIndex } from '../../../reducers/carouselIndex';

var UpButton = (props) => {
  var index = useSelector((state) => state.carouselIndex);
  var dispatch = useDispatch();

  var clickHandler = () => {
    index -= 1;
    dispatch(changeCarouselIndex(index));
  };

  return (
    <button className='up' onClick={() => clickHandler()}>
      &#8593;
    </button>
  );
};

export default UpButton;
