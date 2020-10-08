import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CarouselEntry from './CarouselEntry';
import { changePhotoIndex } from '../../../reducers/photoIndex';

var LeftButton = (props) => {
  var index = useSelector((state) => state.photoIndex);
  var styleData = useSelector((state) => state.styleData);
  var dispatch = useDispatch();

  if (styleData.photos) {
    length = styleData.photos.length;
  }

  var clickHandler = () => {
    if (index === 0) {
      index = length;
    }
    index -= 1;
    console.log(index);
    dispatch(changePhotoIndex(index));
  };

  return (
    <button className='left' onClick={() => clickHandler()}>
      LEFT
    </button>
  );
};

export default LeftButton;
