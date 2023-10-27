import React from 'react';

const CheckboxQuestion = ({ question, options, answer, onAnswer }) => {
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
                        onChange={() => {
                            const newAnswer = answer.includes(option)
                                ? answer.filter((item) => item !== option)
                                : [...answer, option];
                            onAnswer(newAnswer);
                        }}
                    />
                    <label htmlFor={option}>{option}</label>
                </div>
            ))}
        </div>
    );
};

export default CheckboxQuestion;