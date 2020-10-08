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
  var [mouse, setMouse] = useState();
  var [glass, setGlass] = useState();

  var [magToggle, setMagToggle] = useState(false);
  useEffect(() => {
    if (styleData.photos) setImage(styleData.photos[index].url);
  }, [index]);

  useEffect(() => {
    if (styleData.photos) setImage(styleData.photos[index].url);
  }, [styleData]);

  var clickHandler = () => {
    if (!props.toggle) {
      maximize();
    } else {
      minimize();
    }
  };

  var maximize = () => {
    $('.picture').animate({
      maxHeight: '90vh',
      maxWidth: '90vw',
    });
    $('.picture').css({
      cursor: 'crosshair',
    });
    props.setToggle(!props.toggle);
  };

  var minimize = () => {
    $('.picture').animate({ maxHeight: '60vh', maxWidth: '60vw' });
    $('.picture').css({
      cursor: 'zoom-in',
    });
    props.setToggle(!props.toggle);
  };

  return (
    <React.Fragment>
      <LeftButton />

      <img
        id='hellopicture'
        className='picture'
        src={image}
        onClick={() => {
          props.clickHandler();
        }}
      ></img>

      <button className='maximize' onClick={() => props.clickHandler()}>
        maximize
      </button>
      <RightButton />

      <Carousel className='c' />
    </React.Fragment>
  );
};

export default MainView;
