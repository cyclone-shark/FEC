import React from 'react';
import MainView from './left_side/MainView.jsx';
import SideView from './right_side/SideView.jsx';

var Overview = () => {
  return (
    <div className='overview'>
      <MainView />
      <SideView />
    </div>
  );
};

export default Overview;
