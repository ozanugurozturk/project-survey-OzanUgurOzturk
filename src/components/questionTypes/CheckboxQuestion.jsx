import React from 'react';
import './QuestionTypes.css'

const CheckboxQuestion = ({ question, options, answer, onAnswer, scores, scoreScalers }) => {
    const handleOptionChange = (option, score, scoreScaler) => {
        const updatedAnswer = answer === option ? '' : option;
        onAnswer(updatedAnswer, score, scoreScaler);
    };

    return (
        <div className="question-container">
            <h2>{question}</h2>
            {options.map((option, index) => (
                <div key={index} className="option-container">
                    <input
                        type="checkbox"
                        id={option}
                        value={option}
                        checked={answer === option}
                        onChange={() => handleOptionChange(option, scores[index], scoreScalers[index])}
                    />
                    <label htmlFor={option}>{option}</label>
                </div>
            ))}
        </div>
    );
};

export default CheckboxQuestion;