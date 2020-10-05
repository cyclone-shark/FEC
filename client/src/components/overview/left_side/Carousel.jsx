import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CarouselEntry from './CarouselEntry';
var Carousel = (props) => {
  var photos = useSelector((state) => state.styleData.photos);

  return (
    <div className='carousel'>
      {photos
        ? photos.map((photo) => {
            return <CarouselEntry photo={photo} />;
          })
        : null}
    </div>
  );
  hello;
};

export default Carousel;
