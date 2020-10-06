import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from "react-redux";
import axios from "axios";
import SearchBar from './SearchBar.jsx';
import List from './List.jsx';
import AddQuestion from './AddQuestion.jsx';
import ShowTwoQuestions from './ShowTwoQuestions';

const QAndA = () => {

  const [questions, setQuestions] = useState([]);
  const [status, setStaus] = useState(false)
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
        .then(({ data }) => setQuestions(data.results))
        .catch((err) => console.log(err));
    };
    getAnsweredQuestion(id);
  }, [id]);


  return (
    <div>
      <div><h2>Questions and Answers </h2></div>
      <SearchBar />
      <GetQuestions  questions={questions}/>
      <AddQuestion />
    </div>
  );
};

export default QAndA;
