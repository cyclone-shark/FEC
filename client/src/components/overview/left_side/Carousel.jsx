import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CarouselEntry from './CarouselEntry';
var Carousel = (props) => {
  var photos = useSelector((state) => state.styleData.photos);

  return (
    <div>
      {photos
        ? photos.map((photo, index) => {
            return <CarouselEntry index={index} photo={photo} />;
          })
        : null}
    </div>
  );
};

export default Carousel;
