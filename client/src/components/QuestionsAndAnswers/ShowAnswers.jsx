import React, { useState, useEffect, useLayoutEffect } from "react";
import Pictures from "./Pictures.jsx";


const ShowAnswers = ({ renderedList}) => {

  var array = renderedList.slice(0, 2); //show first two
  console.log('array is', array);
  const [count, setCount] = useState(2);
  const [list, setList] = useState(array);
  const [longerList, setLongerList] = useState(array);

  console.log('list is', list)
  console.log('longerList is', longerList)


  const handleClick = () => {
    if (renderedList.length <= 2) {
      setList(renderedList);
    } else if (renderedList.length > 2) {
      var temp = renderedList.slice(0, count);
      setLongerList(temp);
      setCount(count + 2);

    }
  };

  useEffect (() => {
    setList(renderedList.slice(0,2))
    setLongerList(renderedList)
  }, [renderedList])

  return (
    <div>
      <div>
        {renderedList.length <= 2 ? (
          <div> {list}</div>
        ) : (
          <div>
            <div> {longerList} </div>
            <button onClick={handleClick}> MORE ANSWERED QUESTIONS</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowAnswers;
