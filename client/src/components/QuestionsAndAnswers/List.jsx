import React, { useState, useEffect } from "react";
import ShowAnswers from "./ShowAnswers";
import Pictures from './Pictures';


const List = ({questions}) => {


  const renderedList = questions
    .sort((a, b) => b.question_helpfulness - a.question_helpfulness)
    .map((question) => {
      return (
        <div key={question.question_id}>
          <div> Q: {question.question_body}</div>
          <div>
            {Object.keys(question.answers).map((answer) => {
              return (
                <div>
                  <div>A: {question.answers[answer].body}</div>
                  <div>
                    <span>by {question.answers[answer].answerer_name}, </span>
                    <span>{question.answers[answer].date} </span>
                    <span>helpful? {question.answers[answer].helpfulness}</span>
                    <Pictures pictures={question.answers[answer].photos} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    });


  return (
    <div>
      <ShowAnswers renderedList={renderedList} />
    </div>
  );
};

export default List;
