import React from 'react';

const SelectQuestion = ({ question, options, answer, onAnswer, scores, scoreScalers }) => {
    const handleChange = (selectedOption) => {
        const index = options.indexOf(selectedOption);
        if (index !== -1 && scores && scoreScalers) {
            const score = scores[index];
            const scoreScaler = scoreScalers[index];
            onAnswer(selectedOption, score, scoreScaler);
        } else {
            onAnswer(selectedOption, 0, 1);
        }
    };

    return (
        <div>
            <h2>{question}</h2>
            <select value={answer} onChange={(e) => handleChange(e.target.value)}>
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