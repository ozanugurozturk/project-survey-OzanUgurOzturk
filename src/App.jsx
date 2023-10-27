import React from 'react';
import SurveyForm from './components/SurveyForm';
import questions from './assets/questions.json'


const App = () => {
  return (
    <div>
      <h1>How are you feeling today?</h1>
      <SurveyForm questions={questions} />
    </div>
  );
};

export default App;