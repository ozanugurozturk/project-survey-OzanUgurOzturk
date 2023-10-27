import React from 'react';

const RadioQuestion = ({ question, options, answer, onAnswer, scores }) => {
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
              onAnswer(option, scores[index]);
            }}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioQuestion;