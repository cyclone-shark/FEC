import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MainView from './left_side/MainView.jsx';
import SideView from './right_side/SideView.jsx';
import $ from 'jquery';
var Overview = () => {
  var photo = useSelector((state) => state.currentPhoto);
  var [toggle, setToggle] = useState(false);
  var clickHandler = () => {
    if (!toggle) {
      maximize();
    } else {
      minimize();
    }
  };

  var maximize = () => {
    $('.main-view').animate({
      height: '90vh',
      maxWidth: '90vw',
      marginLeft: 'auto',
      marginRight: 'auto',
    });
    $('.picture').css({
      zIndex: 1,
      cursor: 'zoom-out',
    });
    setToggle(!toggle);
  };

  var minimize = () => {
    $('.main-view').animate({
      height: '60vh',
      marginLeft: 'auto',
      marginRight: 'auto',
    });
    $('.picture').css({
      cursor: 'zoom-in',
    });
    setToggle(!toggle);
  };
  return (
    <div
      className='overview'
      onClick={(e) =>
        console.log('overview', e.target, new Date(new Date().getTime()))
      }
    >
      <MainView
        toggle={toggle}
        clickHandler={clickHandler}
        setToggle={setToggle}
      />
      <SideView />
    </div>
  );
};

export default Overview;
