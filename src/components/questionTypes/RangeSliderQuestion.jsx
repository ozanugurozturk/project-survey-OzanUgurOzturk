import React from 'react';

const RangeSliderQuestion = ({ question, min, max, answer, onAnswer, scores, scoreScalers }) => {
  const handleChange = (value, score, scoreScaler) => {
    onAnswer(Number(value), score, scoreScaler);
  };

  return (
    <div>
      <h2>{question}</h2>
      <input
        type="range"
        min={min}
        max={max}
        value={answer}
        onChange={(e) => handleChange(e.target.value, scores[e.target.value - min], scoreScalers[e.target.value - min])}
      />
      <p>{answer}</p>
    </div>
  );
};

export default RangeSliderQuestion;