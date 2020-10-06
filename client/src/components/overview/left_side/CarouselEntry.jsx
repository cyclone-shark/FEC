import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentPhoto } from '../../../reducers/currentPhoto';
import { changePhotoIndex } from '../../../reducers/photoIndex';
import store from '../../../store.js';
var CarouselEntry = (props) => {
  const dispatch = useDispatch();

  var changePhoto = (index) => {
    dispatch(changePhotoIndex(index));
    dispatch(changeCurrentPhoto(props.photo.url));
  };

  return (
    <div id='c'>
      <img
        id={props.index}
        className='carousel'
        src={props.photo.thumbnail_url}
        onClick={(e) => {
          changePhoto(e.target.id);
        }}
      ></img>
    </div>
  );
};

export default CarouselEntry;
