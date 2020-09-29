import React, { useState, useEffect } from 'react';

var StyleEntry = (props) => {
  return (
    <li
      value={props.style.style_id}
      onClick={(e) => console.log(e.target.value)}
    >
      {props.style.style_id}
    </li>
  );
};

export default StyleEntry;
