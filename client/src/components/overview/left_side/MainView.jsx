import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../../../store.js';

var MainView = () => {
  console.log(store.getState());
  return <div>{store.id}</div>;
};

export default MainView;
