import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Carousel from './Carousel';
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import Modal from '@material-ui/core/Modal';
import $ from 'jquery';
import { makeStyles } from '@material-ui/core/styles';
var MainView = (props) => {
  var styleData = useSelector((state) => state.styleData);
  var index = useSelector((state) => state.photoIndex);
  var [image, setImage] = useState();

  useEffect(() => {
    if (styleData.photos) setImage(styleData.photos[index].url);
  }, [index]);

  useEffect(() => {
    if (styleData.photos) setImage(styleData.photos[index].url);
  }, [styleData]);

  return (
    <div className='main-view'>
      <Carousel />
      <LeftButton />

      <img
        className='picture'
        src={image}
        onClick={() => {
          props.clickHandler();
        }}
      ></img>

      {/* <button className='maximize' onClick={() => props.clickHandler()}>
        maximize
      </button> */}
      <RightButton />
    </div>
  );
};

export default MainView;
