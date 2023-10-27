import React from 'react';

const CheckboxQuestion = ({ question, options, answer, onAnswer, scores }) => {
    const handleOptionChange = (option, score) => {
        const updatedAnswer = answer.includes(option)
            ? answer.filter((item) => item !== option)
            : [...answer, option];
        onAnswer(updatedAnswer, score);
    };

    return (
        <div>
            <h2>{question}</h2>
            {options.map((option, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        id={option}
                        value={option}
                        checked={answer.includes(option)}
                        onChange={() => handleOptionChange(option, scores[index])}
                    />
                    <label htmlFor={option}>{option}</label>
                </div>
            ))}
        </div>
    );
};

export default CheckboxQuestion;