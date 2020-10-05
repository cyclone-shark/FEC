import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentPhoto } from '../../../reducers/currentPhoto';
import store from '../../../store.js';
var CarouselEntry = (props) => {
  const dispatch = useDispatch();

  var changePhoto = () => {
    console.log(props.photo.url);
    dispatch(changeCurrentPhoto(props.photo.url));
  };

  return (
    <React.Fragment>
      <img
        className='carousel-entry'
        src={props.photo.thumbnail_url}
        onClick={(e) => changePhoto()}
      ></img>
    </React.Fragment>
  );
};

export default CarouselEntry;
