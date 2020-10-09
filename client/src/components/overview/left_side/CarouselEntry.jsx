import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentPhoto } from '../../../reducers/currentPhoto';
import { changePhotoIndex } from '../../../reducers/photoIndex';
import store from '../../../store.js';
var CarouselEntry = (props) => {
  const dispatch = useDispatch();
  const currIndex = useSelector((state) => state.photoIndex);
  const carouselIndex = useSelector((state) => state.carouselIndex);
  var changePhoto = (index) => {
    console.log(index);
    dispatch(changePhotoIndex(Number(index) + carouselIndex));
    dispatch(changeCurrentPhoto(props.photo.url));
  };

  var borderStyle =
    currIndex === props.index + carouselIndex
      ? { borderStyle: 'solid' }
      : { borderStyle: 'none' };

  return (
    <img
      id={props.index}
      className='carousel-entry'
      src={props.photo.thumbnail_url}
      style={borderStyle}
      onClick={(e) => {
        changePhoto(e.target.id);
      }}
    ></img>
  );
};

export default CarouselEntry;
