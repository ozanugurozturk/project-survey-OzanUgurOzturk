import React from 'react';

const Question = ({ question, options, answer, onAnswer }) => (
  <div>
    <h2>{question}</h2>
    {options.map((option) => (
      <label key={option}>
        <input
          type="radio"
          value={option}
          checked={answer === option}
          onChange={(e) => onAnswer(e.target.value)}
        />
        {option}
      </label>
    ))}
  </div>
);

export default Question;