import React from 'react';

const SelectQuestion = ({ question, options, answer, onAnswer }) => {
    return (
        <div>
            <h2>{question}</h2>
            <select value={answer} onChange={(e) => onAnswer(e.target.value)}>
                <option value="">Select an option</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectQuestion;