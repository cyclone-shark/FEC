import React from "react";

const Pictures = ({ pictures }) => {

  const renderedPicture =
    pictures.length > 0 ? (
      <div>
        {pictures.map((picture, i) => {
          return (
            <img
              key={i}
              src={picture}
              style={{ height: "180px", width: "200px" }}
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