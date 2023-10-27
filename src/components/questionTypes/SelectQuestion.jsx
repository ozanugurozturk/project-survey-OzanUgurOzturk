import React from 'react';

const SelectQuestion = ({ question, options, answer, onAnswer, scores, scoreScaler }) => {
    const handleChange = (selectedOption) => {
        const index = options.indexOf(selectedOption);
        if (index !== -1 && scores && scoreScaler) {
            const score = scores[index] * scoreScaler[index];
            onAnswer(selectedOption, score);
        } else {
            onAnswer(selectedOption, 0); // Select type questions only have scalers in database so I am handling it this way
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