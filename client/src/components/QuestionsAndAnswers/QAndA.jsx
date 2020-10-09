import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import List from './List.jsx';
import AddQuestion from './AddQuestion.jsx';
import LoadAnswers from './LoadAnswers';
import { upDateList } from '../../reducers/QA.js';
import Modal from './Modal.jsx';

const QAndA = () => {
  const dispatch = useDispatch();

  const [questions, setQuestions] = useState([]);
  const [status, setStaus] = useState(false);
  const [listdata, setListData] = useState([]);
  const [items, setItems] = useState([]);

  const id = useSelector((state) => state.productId);

  useEffect(() => {
    const getAnsweredQuestion = (id) => {
      axios
        .get('http://18.224.37.110/qa/questions', {
          params: {
            product_id: id,
            page: 1,
            count: 50,
          },
        })
        .then(({ data }) => {
          setQuestions(data.results);
        })
        .catch((err) => console.log(err));
    };
    getAnsweredQuestion(id);
  }, [id]);

  const qaStyle = {
    'padding-top': '5px',
    'padding-bottom': '40px',
    'padding-left': '40px',
  };

  var interactionHandler = (e) => {
    var element = String(e.target);
    var widget = 'ratings';
    var time = String(new Date(new Date().getTime()));
    axios
      .post(`http://18.224.37.110/interactions`, {
        element,
        widget,
        time,
      })
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div
      style={qaStyle}
      onClick={(e) => {
        interactionHandler(e);
      }}
    >
      <h2> Questions and Answers </h2>
      <List questions={questions} setListData={setListData} id={id} />
    </div>
  );
};

export default QAndA;
