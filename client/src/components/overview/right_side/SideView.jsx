import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import StyleList from './StyleList.jsx';
import SizeSelector from './SizeSelector.jsx';

var SideView = () => {
  return (
    <div className='b'>
      <StyleList />
      <SizeSelector />
    </div>
  );
};

export default SideView;