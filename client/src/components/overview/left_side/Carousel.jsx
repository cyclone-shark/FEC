import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CarouselEntry from './CarouselEntry';
import UpButton from './UpButton';
import DownButton from './DownButton.jsx';
var Carousel = (props) => {
  var photos = useSelector((state) => state.styleData.photos);
  var carouselIndex = useSelector((state) => state.carouselIndex);
  var carousel = null;
  var photosLength;
  useEffect(() => {
    carousel = photos
      ? photos.length < 8
        ? photos
        : photos.slice(carouselIndex, carouselIndex + 7)
      : null;
    photosLength = photos ? photos.length : 0;
  }, [carouselIndex]);

  carousel = photos
    ? photos.length < 8
      ? photos
      : photos.slice(carouselIndex, carouselIndex + 7)
    : null;
  photosLength = photos ? photos.length : 0;
  console.log('asdfse', carouselIndex);
  return (
    <div className='carousel'>
      {carouselIndex === 0 ? null : <UpButton />}

      {carousel
        ? carousel.map((photo, index) => {
            return <CarouselEntry index={index} photo={photo} />;
          })
        : null}
      {console.log(photosLength - carouselIndex)}
      {photosLength - carouselIndex > 7 ? <DownButton /> : null}
    </div>
  );
};

export default Carousel;
