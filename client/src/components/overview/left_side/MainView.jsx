import React, { useState, useEffect } from 'react';
import store from '../../../store.js';

var MainView = () => {
  return <div>{store.id}</div>;
};

export default MainView;
