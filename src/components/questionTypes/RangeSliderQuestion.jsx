import React, { useState, useEffect } from 'react';
import './QuestionTypes.css'

const RangeSliderQuestion = ({ question, min, max, answer, onAnswer, scores, scoreScalers }) => {
    const [sliderValue, setSliderValue] = useState(answer.toString());

    useEffect(() => {
        setSliderValue(answer.toString());
    }, [answer]);

    const handleChange = (value, score, scoreScaler) => {
        setSliderValue(value);
        onAnswer(value, score, scoreScaler);
    };

    return (
        <div className="question-container">
            <h2>{question}</h2>
            <input
                type="range"
                min={min}
                max={max}
                value={sliderValue}
                onChange={(e) => handleChange(e.target.value, scores[e.target.value - min], scoreScalers[e.target.value - min])}
            />
            <p>{sliderValue}</p>
        </div>
    );
};

export default RangeSliderQuestion;