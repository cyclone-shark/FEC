import React, { PureComponent, useEffect, useRef, useState } from 'react';

import Filler from './filler.jsx';
import './styles.css';

const RatingsProgressBar = (props) => {
  return (
      <div className="progress-bar">
        <Filler percentage={props.percentage} />
      </div>
    )
};

export default RatingsProgressBar;