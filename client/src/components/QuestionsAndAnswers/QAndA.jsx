import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.jsx';
import GetQuestions from './GetQuestions.jsx';
import AddQuestion from './AddQuestion.jsx';

const QAndA = () => {
  //const id = useSelector (state => state.productId)
  return (
    <div>
      <SearchBar />
      <GetQuestions />
      <AddQuestion />
    </div>
  );
};

export default QAndA;
