import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MainView from './left_side/MainView.jsx';
import SideView from './right_side/SideView.jsx';
import $ from 'jquery';
var Overview = () => {
  var photo = useSelector((state) => state.currentPhoto);
  var [toggle, setToggle] = useState(false);

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
      <img className='img-magnifier-glass'></img>
      <MainView toggle={toggle} setToggle={setToggle} />
      <SideView />
    </div>
  );
};

export default Overview;
