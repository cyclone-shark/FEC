import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import ShowAnswers from "./ShowAnswers";

const GetQuestions = () => {
  const [questions, setQuestions] = useState([]);

  const id = useSelector((state) => state.productId);
  //console.log("this is ", id);

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




  const [show, setShow] = useState(questions.length > 2 ? true : false);

  return (
    <div>
      <ShowAnswers questions={questions} />
    </div>
  );
};

export default GetQuestions;
