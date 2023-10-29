import React, { useState } from 'react';
import SurveyForm from './components/SurveyForm';
import WeatherCard from './components/WeatherCard';
import questions from './assets/questions.json';

const App = () => {
  const [userName, setUserName] = useState('');
  const [showNameInput, setShowNameInput] = useState(true);
  const [step, setStep] = useState(0);
  const [nameError, setNameError] = useState('');
  const namePattern = /^[A-Za-z\s]{2,30}$/;

  const handleNameSubmit = (name) => {
    if (name.trim() !== '') {
      if (namePattern.test(name)) {
        setUserName(name);
        setShowNameInput(false);
      } else {
        setNameError('Please enter a valid name with 2 to 30 letters and spaces without any numbers and symbols.');
      }
    } else {
      setNameError("I totally understand that you don't want to give your name to me, but at least can you provide me a nickname for me to be able to communicate with you?");
    }
  };

  const handleRestart = () => {
    setUserName('');
    setShowNameInput(true);
    setStep(0);
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
              onChange={(e) => {
                setUserName(e.target.value);
                setNameError('');
              }}
            />
            <button onClick={() => handleNameSubmit(userName)}>Submit</button>
            {nameError && <div className="error-message">{nameError}</div>}
          </div>
        ) : (
          <div>
            <h1>{`${userName}! I have some questions to ask you.`}</h1>
          </div>
        )}
      </div>
      {!showNameInput && (
        <div className="survey-container">
          <SurveyForm
            questions={questions}
            userName={userName}
            step={step}
            setStep={setStep}
            handleRestart={handleRestart}
          />
        </div>
      )}
    </div>
  );
};

export default App;