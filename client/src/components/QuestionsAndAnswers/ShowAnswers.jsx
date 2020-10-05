import React, {useState} from 'react';
import Pictures from './Pictures.jsx';

const ShowAnswers = ({questions, setQuestion}) => {

  //console.log(questions)
  const renderedList = questions.map((question) => {
    return (
      <div >
        <div > Q: {question.question_body}</div>
        <div>
          {Object.keys(question.answers).map((answer) => {
            return (
              <div>
                <div>A: {question.answers[answer].body}</div>
                <div>
                  <span>by {question.answers[answer].answerer_name}, </span>
                  <span>{question.answers[answer].date} </span>
                  <span> helpful? {question.answers[answer].helpfulness}</span>
                  <Pictures pictures={question.answers[answer].photos} />
                </div>
              </div>
            )
          })}
        </div>

      </div>

    )
  })

  return (
    <div>
      <h4> LOAD MORE ANSWERS </h4>
      <div>
        <div>{renderedList}</div>
        <button> MORE ANSWERED QUESTIONS</button>
      </div>
      <div>

      </div>

    </div>
  )

}


export default ShowAnswers;
