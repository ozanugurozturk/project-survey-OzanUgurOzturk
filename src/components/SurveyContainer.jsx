import React, { useState } from 'react';
import SurveyForm from './SurveyForm';
import WeatherCard from './WeatherCard';
import questions from '../assets/questions.json';

const SurveyContainer = () => {
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
            <label htmlFor="userName">Name:</label>
            <input
              type="text"
              id="userName" // Adding an id for the input field
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
                setNameError('');
              }}
              aria-describedby="name-error"
            />
            <button onClick={() => handleNameSubmit(userName)}>Submit</button>
            {nameError && <div className="error-message" id="name-error">{nameError} </div>}
          </div>
        ) : (
          <div>
            <h1>{`Hello ${userName}! I have some questions to ask you. Can you answer them?`}</h1>
          </div>
        )}
      </div>
      {!showNameInput && (
        <div className="survey-container">
          <fieldset>
            <legend>{`${userName}'s Survey`}</legend>
            <SurveyForm
              questions={questions}
              userName={userName}
              step={step}
              setStep={setStep}
              handleRestart={handleRestart}
            />
          </fieldset>
        </div>
      )}
    </div>
  );
};

export default SurveyContainer;