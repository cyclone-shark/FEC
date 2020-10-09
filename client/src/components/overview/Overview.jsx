import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MainView from './left_side/MainView.jsx';
import SideView from './right_side/SideView.jsx';
import $ from 'jquery';
import axios from 'axios';
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

  var interactionHandler = (e) => {
    var element = String(e.target);
    var widget = 'overview';
    var time = String(new Date(new Date().getTime()));

    axios
      .post(`http://18.224.37.110/interactions`, {
        element,
        widget,
        time,
      })
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div
      className='overview'
      onClick={(e) => {
        interactionHandler(e);
      }}
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
