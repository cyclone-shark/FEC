import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Carousel from './Carousel';
import LeftButton from './LeftButton';
import RightButton from './RightButton';
var MainView = () => {
  var styleData = useSelector((state) => state.styleData);
  var index = useSelector((state) => state.photoIndex);
  var [toggle, setToggle] = useState(true);
  var [image, setImage] = useState();
  var [mouse, setMouse] = useState();

  useEffect(() => {
    if (styleData.photos) setImage(styleData.photos[index].url);
  }, [index]);
  useEffect(() => {
    if (styleData.photos) setImage(styleData.photos[index].url);
  }, [styleData]);

  var _onMouseMove = (e) => {
    setMouse({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    console.log(mouse);
  };
  return (
    <React.Fragment>
      <LeftButton />
      <div className='a'>
        {toggle ? (
          <img
            className='picture'
            src={image}
            onMouseMove={(e) => _onMouseMove(e)}
          ></img>
        ) : (
          <img className='max-picture' src={image}></img>
        )}
      </div>
      <button onClick={() => setToggle(!toggle)}>maximize</button>
      <RightButton />
      <div className='c'>
        <Carousel />
      </div>
    </React.Fragment>
  );
};

export default MainView;
