import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ShowAnswers from './ShowAnswers';


const GetQuestions = () => {

  const [questions, setQuestions] = useState([]);

  //Fetching questions from the API
  // useEffect(()=> {
  //   const getAnsweredQuestion = (id) => {
  //     axios.get('http://18.224.37.110/qa/questions', {
  //       params: {
  //         product_id: id,
  //         page:1,
  //         count:50
  //       }
  //     }).then(({data}) => setQuestions(data.results)).catch((err) => console.log(err))
  //   }
  // })

    const getAnsweredQuestion = (id) => {
      axios.get('http://18.224.37.110/qa/questions', {
        params: {
          product_id: id,
          page:1,
          count:50
        }
      }).then(({data}) => setQuestions(data.results)).catch((err) => console.log(err))
    }
    getAnsweredQuestion(20)

  const [show, setShow] = useState(questions.length > 2 ? true : false);

  return (
    <div>
      <ShowAnswers questions={questions}/>
    </div>
  )

}


export default GetQuestions;

