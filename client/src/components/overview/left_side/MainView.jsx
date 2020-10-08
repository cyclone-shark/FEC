import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Carousel from './Carousel';
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import $ from 'jquery';
var MainView = (props) => {
  var styleData = useSelector((state) => state.styleData);
  var index = useSelector((state) => state.photoIndex);
  var [image, setImage] = useState();
  var [mouse, setMouse] = useState();
  var [glass, setGlass] = useState();

  var [magToggle, setMagToggle] = useState(false);
  useEffect(() => {
    if (styleData.photos) setImage(styleData.photos[index].url);
  }, [index]);

  useEffect(() => {
    if (styleData.photos) setImage(styleData.photos[index].url);
  }, [styleData]);

  var _onMouseMove = (e) => {
    setMouse({ x: e.pageX, y: e.pageY });
    // moveMagnifier('hellopicture', glass, 3);
  };

  var magnify = (glass, imgID, zoom) => {
    var img, w, h, bw;
    img = document.getElementById(imgID);
    /* Create magnifier glass: */
    glass = document.createElement('DIV');
    glass.setAttribute('class', 'img-magnifier-glass');
    setGlass(glass);
    /* Insert magnifier glass: */
    img.parentElement.insertBefore(glass, img);

    /* Set background properties for the magnifier glass: */
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = 'no-repeat';
    glass.style.backgroundSize =
      img.width * zoom + 'px ' + img.height * zoom + 'px';
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

    /* Execute a function when someone moves the magnifier glass over the image: */
    // glass.addEventListener('mousemove', moveMagnifier(imgID, glass, zoom));
    // img.addEventListener('mousemove', moveMagnifier(imgID, glass, zoom));

    var moveMagnifier = (imgID, glass, zoom) => {
      glass.style.left = mouse.x;
      glass.style.top = mouse.y;
    };
    /*and also for touch screens:*/
    // glass.addEventListener('touchmove', moveMagnifier(imgID, glass));
    // img.addEventListener('touchmove', moveMagnifier(imgID, glass));
  };

  var clickHandler = () => {
    if (!props.toggle) {
      maximize();
    } else {
      if (!magToggle) {
        _magnify(3);

        $('.img-magnifier-glass').css({
          visibility: 'visible',
        });
        console.log('magnify');
        setMagToggle(!magToggle);
      } else {
        //unmagnify
        $('.picture').css({
          cursor: 'crosshair',
        });
        $('.img-magnifier-glass').css({ visibility: 'hidden' });
        setMagToggle(!magToggle);
        console.log('unmagnify');
      }
    }
  };

  var maximize = () => {
    if (!props.toggle) {
      $('.picture').animate({
        maxHeight: '90vh',
        maxWidth: '90vw',
        cursor: 'crosshair',
      });
      $('.picture').css({
        cursor: 'crosshair',
      });
      props.setToggle(!props.toggle);
    }
  };

  var minimize = () => {
    $('.picture').animate({ maxHeight: '60vh', maxWidth: '60vw' });
    $('.picture').css({
      cursor: 'zoom-in',
    });
  };

  var maxAndMin = () => {
    !props.toggle ? maximize() : minimize();
    props.setToggle(!props.toggle);
  };

  var _magnify = (zoom) => {
    var glass = $('.img-magnifier-glass');
    console.log(glass.style);
    console.log(image);
    glass.css({ backgroundImage: "url('" + image + "')" });
    glass.css({ backgroundRepeat: 'no-repeat' });
    // glass.css({
    //   backgroundSize: img.width * zoom + 'px ' + img.height * zoom + 'px',
    // });
  };

  // $(document).on('mousemove', function (e) {
  //   $('#hellopicture').css({
  //     left: e.pageX,
  //     top: e.pageY,
  //   });
  // });

  return (
    <React.Fragment>
      <LeftButton />
      <div className='a'>
        <img
          id='hellopicture'
          className='picture'
          src={image}
          onClick={(e) => clickHandler()}
          // onMouseMove={(e) => _onMouseMove(e)}
        ></img>
      </div>
      <button className='maximize' onClick={() => maxAndMin()}>
        maximize
      </button>
      <RightButton />
      <div className='c'>
        <Carousel />
      </div>
    </React.Fragment>
  );
};

export default MainView;
