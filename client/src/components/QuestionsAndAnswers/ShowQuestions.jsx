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


  const btnStyle = {
    'font-size': '16px',
    'font-weight': 'bold',
    'background-color': 'rgba(95, 63, 191, 0.15)',
    'border': 'none',
    'margin-bottom': '3%',
    'color': 'rgb(75, 75, 75)'
  }

  return (
    <div>
      <div>

          <div>
            <div> {longerList} </div>
            {toggle ?
            <button style={btnStyle} onClick={handleClick}> MORE ANSWERED QUESTIONS</button>
            : null }
          </div>

      </div>
    </div>
  );
};

export default ShowQuestions;
