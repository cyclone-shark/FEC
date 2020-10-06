import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import ShowAnswers from "./ShowAnswers";
import Pictures from './Pictures';


const GetQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [status, setStaus] = useState(false)
  const id = useSelector((state) => state.productId);

  //Fetching questions from the API
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

  // useEffect(() => {
  //   const getAnsweredQuestion = async () => {
  //     const response = await axios.get("http://18.224.37.110/qa/questions", {
  //       params: {
  //         product_id: id,
  //         page: 1,
  //         count: 50,
  //       },
  //     });
  //     console.log(response)
  //     setQuestions(response.data);
  //   };
  //   getAnsweredQuestion();
  // }, [id]);
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

export default GetQuestions;
