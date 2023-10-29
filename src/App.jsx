import React, { useState, useEffect } from 'react';
import SurveyForm from './components/SurveyForm';
import WeatherCard from './components/WeatherCard';
import questions from './assets/questions.json';

const App = () => {
  const [userName, setUserName] = useState('');
  const [showNameInput, setShowNameInput] = useState(true);

  const handleNameSubmit = (name) => {
    if (name.trim() !== '') {
      setUserName(name);
      setShowNameInput(false);
    } else {
      alert("I totally understand that you don't want to give your name to me, but at least can you provide me a nickname for me to be able to communicate with you?");
    }
  };

  return (
    <div>
      <WeatherCard />
      <div className="content-container">
        {showNameInput ? (
          <div>
            <h1>Can I get your name, please?</h1>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={() => handleNameSubmit(userName)}>Submit</button>
          </div>
        ) : (
          <div>
            <h1>{`${userName}! I have some questions to ask you.`}</h1>
          </div>
        )}
      </div>
      {!showNameInput && (
        <div className="survey-container">
          <SurveyForm questions={questions} userName={userName} />
        </div>
      )}
    </div>
  );
};

export default App;
