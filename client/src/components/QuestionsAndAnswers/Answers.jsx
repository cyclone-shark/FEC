import React from "react";
import Pictures from './Pictures';
import ShowAnswers from './showanswers';
//import AddAnswer from


const Answers = ({ answers }) => {

  const renderedAnswers = Object.keys(answers).map((answer)=> {
    return (
      <div>
        <div>
          A: {answers[answer].body}
        </div>
        <span>
          by {answers[answer].answerer_name},
        </span>
        <span>
          {answers[answer].date}
        </span>
        <div>
          <Pictures pictures={answers.[answer].photos}/>
        </div>
      </div>
    )
  })


  return (
    <div> <ShowAnswers renderedAnswers={renderedAnswers}/> </div>
  )
};

export default Answers;
