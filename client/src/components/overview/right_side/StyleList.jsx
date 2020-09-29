import React, { useState, useEffect } from 'react';
import StyleEntry from './StyleEntry.jsx';

var StyleList = () => {
  return (
    <ul>
      {store.styles.map((style) => {
        return <StyleEntry style={style} />;
      })}
    </ul>
  );
};

export default StyleList;
