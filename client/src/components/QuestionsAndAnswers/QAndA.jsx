import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.jsx';
import GetQuestions from './GetQuestions.jsx';
import AddQuestion from './AddQuestion.jsx';
import ShowTwoQuestions from './ShowTwoQuestions';

const QAndA = () => {

  return (
    <div>
      <SearchBar />
      <GetQuestions />
      <AddQuestion />
    </div>
  );
};

export default QAndA;
