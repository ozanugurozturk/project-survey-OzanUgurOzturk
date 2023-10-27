import React from 'react';
import PropTypes from 'prop-types';

const SurveyResultPopup = ({ questions, answers, totalScore, onClosePopup }) => {
    return (
        <div className="popup">
            <h2>Summary</h2>
            {questions.map((question, index) => (
                <p key={index}>
                    Q{index + 1}: {question.question}
                    <br />
                    Your answer: <strong>{answers[index]}</strong>
                </p>
            ))}
            <h2>Suggestions</h2>
            <p>{calculateSuggestions(totalScore)}</p>
            <button onClick={onClosePopup}>Close</button>
        </div>
    );
};

SurveyResultPopup.propTypes = {
    questions: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string.isRequired,
        })
    ).isRequired,
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    totalScore: PropTypes.number.isRequired,
    onClosePopup: PropTypes.func.isRequired,
};

export default SurveyResultPopup;