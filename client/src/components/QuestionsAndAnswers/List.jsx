import React, { useEffect } from "react";
import Helpful from "./Helpful";
import Answers from "./Answers";
import AddAnswer from "./AddAnswer";
import ShowQuestions from "./ShowQuestions";
import { useSelector, useDispatch } from "react-redux";
import AddQuestion from "./AddQuestion.jsx";

const List = ({ questions, setQuestions, setListData, id }) => {
  //<Helpfulness helpful={question.question_helpfulness}/>

  const list = {
    'padding-top': '20px',
    'padding-bottom': '20px',
    'display': "flex",
    "flex-direction": "column",
    "-webkit-flex": "1 1 auto",
    "overflow-y": "auto",
    "max-height": "500px",
    "max-width": "80%",
  };


  const questionStyle = {
    'padding-bottom': '2px',
    'font-weight': 'bold',
    'color': 'black',
    'font-size': '18px',
    'display': 'inline',
  }

  const addAnswerStyle ={
    'display': 'inline'
  }

  const helpfulStyle = {
    'display': 'flex'
  }

  const renderedList = questions
    .sort((a, b) => b.question_helpfulness - a.question_helpfulness)
    .map((question) => {
      return (
        <div>
          <div>
            <span style={questionStyle}>Q: {question.question_body}</span>
            <span style={addAnswerStyle}>
              <AddAnswer />
            </span>
            <span style={helpfulStyle}>
              <Helpful helpful={question.question_helpfulness} />
            </span>
          </div>
          <div>
            <Answers answers={question.answers} />
          </div>
        </div>
      );
    });

  useEffect(() => {
    setListData(renderedList);
  }, [id]);

  return (
    <div style={list}>
      <div>
        <ShowQuestions renderedList={renderedList} />
      </div>
      <div>
        <AddQuestion setQuestions={setQuestions} />
      </div>
    </div>
  );
};

export default List;
