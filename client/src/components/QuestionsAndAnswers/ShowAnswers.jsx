import React, { useState, useEffect} from "react";


const ShowAnswers = ({renderedAnswers}) => {

  const [show, setShow] = useState(false)
  const [answers, setAnswers] = useState([])
  const [answerLength, setAnswerLength] = useState(0)

  const handleClick = () => {
    if (answerLength > 2) {
      setAnswers(renderedAnswers)
      console.log('hit')
    }
  };


  useEffect (() => {

    setAnswers(renderedAnswers.slice(0, 2))
    setAnswerLength(renderedAnswers.length)

    if (renderedAnswers.length > 2) {
      setShow(true)
    }
  },[renderedAnswers])


  return (
    <div>
      <div>
          <div>
            <div> {answers} </div>
            {show ?
            <button onClick={handleClick}> LOAD MORE ANSWERS </button>
            : null }
          </div>

      </div>
    </div>
  );
};


export default ShowAnswers;