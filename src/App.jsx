import React, { useState, useEffect } from 'react';
import SurveyForm from './components/SurveyForm';
import WeatherCard from './components/WeatherCard';
import questions from './assets/questions.json';

const App = () => {
  return (
    <div>
      <WeatherCard />
      <div className="content-container">
        <h1>How are you feeling today my friend?</h1>
      </div>
      <div className="survey-container">
        <SurveyForm questions={questions} />
      </div>
    </div>
  );
};

export default App;
