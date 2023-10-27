import React from 'react';

const RangeSliderQuestion = ({ question, min, max, answer, onAnswer, scores }) => {
  const handleChange = (value, score) => {
    onAnswer(Number(value), score);
  };

  return (
    <div>
      <h2>{question}</h2>
      <input
        type="range"
        min={min}
        max={max}
        value={answer}
        onChange={(e) => handleChange(e.target.value, scores[e.target.value - min])}
      />
      <p>{answer}</p>
    </div>
  );
};

export default RangeSliderQuestion;