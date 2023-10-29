import React from 'react';
import PropTypes from 'prop-types';

const calculateSuggestions = (score) => {
    console.log(score);
    if (score <= -100) {
        return "Call your parents or someone who loves you no matter who you are.";
    } else if (score <= 0) {
        return "Call your high school friend to talk about the things you have done together.";
    } else if (score <= 100) {
        return "Tell yourself it is a great day, send a message to your loved one, ask them to do something at the end of the day.";
    } else if (score <= 300) {
        return "Do things more related with your hobbies, maybe ask your friend to play basketball with you.";
    } else {
        return "Make your day even better by sharing your great day with someone, maybe you will be the source of happiness for your beloved one.";
    }
};

const SurveyResultPopup = ({ questions, answers, totalScore, userName, onClosePopup }) => {
    return (
        <div className="survey-popup"> {/* Apply the CSS class */}
            <h2>Survey Result</h2>
            <h3>Summary</h3>
            <ul>
                {questions.map((question, index) => (
                    <li key={index}>
                        {`${question.question} => `}
                        <strong>{answers[index]}</strong>
                    </li>
                ))}
            </ul>
            <h3>My Suggestion For You</h3>
            <p>
                <strong>{userName}: </strong>
                {calculateSuggestions(totalScore)}
            </p>
            <button onClick={onClosePopup}>Return</button>
        </div>
    );
};

SurveyResultPopup.propTypes = {
    questions: PropTypes.arrayOf(PropTypes.object).isRequired,
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    totalScore: PropTypes.number.isRequired,
    onClosePopup: PropTypes.func.isRequired,
};

export default SurveyResultPopup;