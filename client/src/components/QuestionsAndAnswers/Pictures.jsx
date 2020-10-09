import React from "react";

const Pictures = ({ pictures }) => {

  const list = {
    'display': 'flex',
    'flex-direction': 'row',
    'margin-bottom': '2%'
  }

  const imageStyle ={
    'margin-right': '2%',
    'border': '1px solid rgb(73, 73, 73)',
    'object-fit': 'cover',
    'width': '150px',
    'height': '80px',
  }
  const renderedPicture =
    pictures.length > 0 ? (
      <div styles={list} class="ui small images">
        {pictures.map((picture, i) => {
          return (
            <img
              style={imageStyle}
              key={i}
              src={picture}
              // style={{ height: "180px", width: "200px" }}
            />
          );
        })}
      </div>
    ) : (
      <span></span>
    );

  return <div>{renderedPicture}</div>;
};

export default Pictures;