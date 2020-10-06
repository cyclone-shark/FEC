import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Carousel from './Carousel';
import LeftButton from './LeftButton';
import RightButton from './RightButton';
var MainView = () => {
  var styleData = useSelector((state) => state.styleData);
  var index = useSelector((state) => state.photoIndex);
  var [image, setImage] = useState();

  useEffect(() => {
    if (styleData.photos) setImage(styleData.photos[index].url); //mainImage = styleData.photos[index];
  }, [index]);
  useEffect(() => {
    if (styleData.photos) setImage(styleData.photos[index].url); //mainImage = styleData.photos[index];
  }, [styleData]);

  return (
    <React.Fragment>
      <LeftButton />
      <div className='a'>
        <img className='picture' src={image}></img>
      </div>
      <RightButton />
      <div className='c'>
        <Carousel />
      </div>
    </React.Fragment>
  );
};

export default MainView;
