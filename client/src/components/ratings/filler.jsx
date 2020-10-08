import React, { PureComponent, useEffect, useRef, useState } from 'react';
import './styles.css';

const Filler = (props) => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />
}
export default Filler;
