import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Helpful = ({ helpful }) => {
  const id = useSelector((state) => state.productId);
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  const onClick = () => {
    if (!toggle) {
      setToggle(true);
      axios
        .put(`http://18.224.37.110/qa/questions/${id}/helpful`)
        .then(() => setCounter(counter + 1)).catch(err => console.log(err))
    }
  };


  const btnStyle = {
    'font-size': '12px',
    'font-weight': 'bold',
    'background-color': 'rgba(95, 63, 191, 0.15)',
    'border': 'none',
    'margin-bottom': '3%',
    'color': 'rgb(75, 75, 75)'
  }

  return (
    <div>
      <span> Helpful? </span>
      <span><button style={btnStyle} onClick={onClick}> Yes </button></span>
      <span>{counter}</span>
    </div>
  )
};

export default Helpful;
