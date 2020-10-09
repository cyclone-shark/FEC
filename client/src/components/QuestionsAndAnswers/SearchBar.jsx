import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const SearchBar = ({ data, setItems, id }) => {
  const [term, setTerm] = useState("");
  const [questions, setQuestions] = useState([]);
  const [finalQuestionsArray, setFinalQuestionsArray] = useState([])

  const searchArray = [];
  // useEffect(() => {
  //   const searchWords = () => {
  //     if (term.length >= 3) {
  //       for (var i = 0; i < data.length; i++) {
  //          let arr = [data[i].question_body]
  //         if (arr.includes(term)) {
  //           searchArray.push(data[i])
  //         }
  //       }
  //     }
  //   }
  //   searchWords();
  //   setItems(searchArray)
  // }, [id])


  const handleSubmit = () => {
    var filtered = data.filter((item) => {
      item.question_body.toLowerCase().includes(term)
    });
    var func = setItems(filtered)
    setTimeout(func, 500)
  }



  const onChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <input className="input" onChange={onChange} />
        </div>
      </div>
      <button className="ui celled list" onClick={handleSubmit}>
        Enter text
      </button>
    </div>
  );
};

export default SearchBar;
