import React, {useEffect} from "react";
import Helpful from "./Helpful";
import Answers from './Answers';
import AddAnswer from './AddAnswer';
import ShowQuestions from './ShowQuestions'
import { useSelector, useDispatch } from "react-redux";

const List = ({ questions, setListData, id }) => {

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
             <Helpful helpful={question.question_helpfulness}/>
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

  useEffect(() => {
    setListData(renderedList)
  }, [id])

  return (<div>
     <ShowQuestions renderedList={renderedList}/>
     </div>)
}

export default List;