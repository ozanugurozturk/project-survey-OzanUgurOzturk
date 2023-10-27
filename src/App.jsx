import React, { useState } from 'react';
import RadioQuestion from './components/RadioQuestion';
import questions from './assets/questions.json'


const App = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[step] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div>
      <h1>How are you feeling today?</h1>
      {step < questions.length ? (
        <RadioQuestion
          question={questions[step].question}
          options={questions[step].options}
          answer={answers[step]}
          onAnswer={handleAnswer}
        />
      ) : (
        <div>
          <h2>Summary</h2>
          <p>Your mood: {answers[0]}</p>
          {/* You can add more details from other questions here */}
        </div>
      )}
      <button onClick={handleNext} disabled={!answers[step]}>
        {step < questions.length - 1 ? 'Next' : 'Submit'}
      </button>
    </div>
  );
};

export default App;