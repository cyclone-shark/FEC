import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentPhoto } from '../../../reducers/currentPhoto';
import { changePhotoIndex } from '../../../reducers/photoIndex';
import store from '../../../store.js';
var CarouselEntry = (props) => {
  const dispatch = useDispatch();

  var changePhoto = (index) => {
    console.log(index);
    dispatch(changePhotoIndex(Number(index)));
    dispatch(changeCurrentPhoto(props.photo.url));
  };

  return (
    <img
      id={props.index}
      className='carousel-entry'
      src={props.photo.thumbnail_url}
      onClick={(e) => {
        changePhoto(e.target.id);
      }}
    ></img>
  );
};

export default CarouselEntry;
