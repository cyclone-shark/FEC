import React from "react";
import Helpful from "./Helpful";
import Answers from './Answers';
import AddAnswer from './AddAnswer';



const List = ({ questions }) => {

  //<Helpfulness helpful={question.question_helpfulness}/>


  const renderedList = questions
  .sort((a,b) => b.question_helpfulness - a.question_helpfulness)
  .map((question) => {
    return (
      <div>
        <div>
          <span>
            Q: {question.question_body}
          </span>
          <span>
            {question.question_helpfulness} |
          </span>
          <span> Yes </span>
          <span>
            <AddAnswer/>
          </span>
        </div>
          <div>
            <Answers answers={question.answers}/>
          </div>
      </div>
    )});

  return (<div> {renderedList}</div>)
}

export default List;