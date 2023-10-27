import React from 'react';

const RangeSliderQuestion = ({ question, min, max, answer, onAnswer }) => {
  return (
    <div>
      <h2>{question}</h2>
      <input
        type="range"
        min={min}
        max={max}
        value={answer}
        onChange={(e) => onAnswer(Number(e.target.value))}
      />
      <p>{answer}</p>
    </div>
  );
};

export default RangeSliderQuestion;