import React, { useState, useEffect } from 'react';
import SurveyForm from './components/SurveyForm';
import WeatherCard from './components/WeatherCard';
import questions from './assets/questions.json';

const App = () => {
  return (
    <div>
      <WeatherCard /> {/* Add WeatherCard component here */}
      <h1>How are you feeling today?</h1>
      <SurveyForm questions={questions} />
    </div>
  );
};

export default App;
