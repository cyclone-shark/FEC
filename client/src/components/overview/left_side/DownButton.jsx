import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CarouselEntry from './CarouselEntry';
import { changeCarouselIndex } from '../../../reducers/carouselIndex';

var DownButton = (props) => {
  var index = useSelector((state) => state.carouselIndex);
  var dispatch = useDispatch();

  var clickHandler = () => {
    index += 1;
    dispatch(changeCarouselIndex(index));
  };

  return (
    <button className='down' onClick={() => clickHandler()}>
      &#8595;
    </button>
  );
};

export default DownButton;
