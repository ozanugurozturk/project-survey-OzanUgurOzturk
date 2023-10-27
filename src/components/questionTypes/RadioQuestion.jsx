import React from 'react';

const RadioQuestion = ({ question, options, answer, onAnswer, scores, scoreScalers }) => {
  return (
    <div>
      <h2>{question}</h2>
      {options.map((option) => (
        <div key={option}>
          <input
            type="radio"
            id={option}
            name="radio-question"
            value={option}
            checked={answer === option}
            onChange={() => {
              const index = options.indexOf(option);
              const score = scores[index];
              const scoreScaler = scoreScalers[index];
              onAnswer(option, score, scoreScaler);
            }}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioQuestion;