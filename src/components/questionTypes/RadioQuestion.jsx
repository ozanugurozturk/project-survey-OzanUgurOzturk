import React from 'react';

const RadioQuestion = ({ question, options, answer, onAnswer }) => {
  return (
    <div>
      <h2>{question}</h2>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={option}
            name="radio-question"
            value={option}
            checked={answer === option}
            onChange={() => onAnswer(option)}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioQuestion;