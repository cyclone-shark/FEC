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
    $('.overview').animate({
      height: '90%',
      maxWidth: '90%',
    });
    $('.overview').css({
      cursor: 'crosshair',
    });
    setToggle(!toggle);
  };

  var minimize = () => {
    $('.overview').animate({ height: '60%', maxWidth: '60%' });
    $('.overview').css({
      cursor: 'zoom-in',
    });
    setToggle(!toggle);
  };
  return (
    <div
      className='overview'
      // onMouseMove={(e) => {
      //   // $('.temp').css({ left: e.pageX, top: e.pageY });
      //   if (e.target.className === 'picture') {
      //     if (toggle) {
      //       // $('.temp').css({
      //       //   visibility: 'visible',
      //       // });
      //       $('.temp').animate({ left: e.pageX, top: e.pageY });
      //     }
      //   } else {
      //     // $('.temp').css({ visibility: 'hidden' });
      //   }
      // }}
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
