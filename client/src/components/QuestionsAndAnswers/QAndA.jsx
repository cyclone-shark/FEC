import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import SearchBar from './SearchBar.jsx';
import List from './List.jsx';
import AddQuestion from './AddQuestion.jsx';
import LoadAnswers from './LoadAnswers';
import {upDateList} from '../../reducers/QA.js'
import Modal from './Modal.jsx';

const QAndA = () => {

  const dispatch = useDispatch()

  const [questions, setQuestions] = useState([]);
  const [status, setStaus] = useState(false)
  const [listdata, setListData] = useState([])
  const [items, setItems] = useState([])


  const id = useSelector((state) => state.productId);

  useEffect(() => {
    const getAnsweredQuestion = (id) => {
      axios
        .get("http://18.224.37.110/qa/questions", {
          params: {
            product_id: id,
            page: 1,
            count: 50,
          },
        })
        .then(({ data }) => {
          setQuestions(data.results)
        })
        .catch((err) => console.log(err));
    };
    getAnsweredQuestion(id);
  }, [id]);




  return (
    <React.Fragment>
      <div><h2>Questions and Answers </h2></div>
      {/* <SearchBar data={questions} setItems={setItems} id={id}/> */}
      <List questions={questions} setListData={setListData} id={id}/>
      <AddQuestion setQuestions={setQuestions}/>
      <Modal questions={questions} />
    </React.Fragment>
  );
};

export default QAndA;
