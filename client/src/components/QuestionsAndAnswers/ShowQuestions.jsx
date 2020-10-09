import React, { useState, useEffect} from "react";
import Pictures from "./Pictures.jsx";


const ShowQuestions = ({ renderedList}) => {
  //console.log('rendered list',renderedList)
  //var array = renderedList.slice(0, 2); //show first two

  const [count, setCount] = useState(2);
  const [toggle, setToggle] = useState(false);
  const [longerList, setLongerList] = useState([]);
  const [listLength, setListLength] = useState(0)




  const handleClick = () => {
    if (listLength > 2) {
      setCount(count + 2);
      var temp = renderedList.slice(0, count);
      setLongerList(temp);
    }
  };


  useEffect (() => {
    setLongerList(renderedList.slice(0, 4))
    setListLength(renderedList.length)

    if (renderedList.length > 2) {
      setToggle(true)
    }
  }, [renderedList])

  return (
    <div>
      <div>

          <div>
            <div> {longerList} </div>
            {toggle ?
            <button onClick={handleClick}> MORE ANSWERED QUESTIONS</button>
            : null }
          </div>

      </div>
    </div>
  );
};

export default ShowQuestions;
