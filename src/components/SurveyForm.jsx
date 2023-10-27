import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RadioQuestion from './questionTypes/RadioQuestion';
import SelectQuestion from './questionTypes/SelectQuestion';
import CheckboxQuestion from './questionTypes/CheckboxQuestion';
import RangeSliderQuestion from './questionTypes/RangeSliderQuestion';
import SurveyResultPopup from './SurveyResultPopup';

const SurveyForm = ({ questions }) => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(''));
    const [scores, setScores] = useState(Array(questions.length).fill(0));
    const [scoreScalers, setScoreScalers] = useState(Array(questions.length).fill(1));
    const [showPopup, setShowPopup] = useState(false);

    const handleAnswer = (answer, score, scoreScaler) => {
        const newAnswers = [...answers];
        newAnswers[step] = answer;
        setAnswers(newAnswers);

        const newScores = [...scores];
        newScores[step] = score;
        setScores(newScores);

        const newScoreScalers = [...scoreScalers];
        newScoreScalers[step] = scoreScaler;
        setScoreScalers(newScoreScalers);
    };

    const handlePrevious = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    const handleNext = () => {
        if (step < questions.length - 1) {
            if (questionIsAnswered(questions[step], answers[step])) {
                setStep(step + 1);
            } else {
                alert("Please answer the current question before proceeding.");
            }
        } else {
            setShowPopup(true); // Reached the end, show the pop-up
        }
    };

    const questionIsAnswered = (question, answer) => {
        switch (question.type) {
            case 'radio':
                return answer !== '';
            case 'select':
                return answer !== '';
            case 'checkbox':
                return answer.length > 0;
            case 'range':
                return answer >= question.min && answer <= question.max;
            default:
                return false;
        }
    };

    const calculateTotalScore = () => {
        const totalScore = scores.reduce((acc, score, index) => {
            return acc + (score || 0) * (scoreScalers[index] || 1);
        }, 0);
    
        return totalScore;
    };

    return (
        <div>
            {showPopup ? (
                <SurveyResultPopup
                    questions={questions}
                    answers={answers}
                    totalScore={calculateTotalScore()}
                    onClosePopup={() => setShowPopup(false)}
                />
            ) : (
                renderQuestion(questions[step], answers[step], handleAnswer)
            )}
            <button onClick={handlePrevious} disabled={step === 0}>
                Previous
            </button>
            <button onClick={handleNext}>
                {step < questions.length - 1 ? 'Next' : 'Submit'}
            </button>
        </div>
    );
};

const renderQuestion = (question, answer, onAnswer) => {
    switch (question.type) {
        case 'radio':
            return (
                <RadioQuestion
                    question={question.question}
                    options={question.options}
                    answer={answer}
                    onAnswer={onAnswer}
                    scores={question.score} // Pass scores as a prop
                    scoreScalers={question.scoreScaler} // Pass scoreScaler as a prop
                />
            );
        case 'select':
            return (
                <SelectQuestion
                    question={question.question}
                    options={question.options}
                    answer={answer}
                    onAnswer={onAnswer}
                    scores={question.score} // Pass scores as a prop
                    scoreScalers={question.scoreScaler} // Pass scoreScaler as a prop
                />
            );
        case 'checkbox':
            return (
                <CheckboxQuestion
                    question={question.question}
                    options={question.options}
                    answer={answer}
                    onAnswer={onAnswer}
                    scores={question.score} // Pass scores as a prop
                    scoreScalers={question.scoreScaler} // Pass scoreScaler as a prop
                />
            );
        case 'range':
            return (
                <RangeSliderQuestion
                    question={question.question}
                    min={question.min}
                    max={question.max}
                    answer={answer}
                    onAnswer={onAnswer}
                    scores={question.score} // Pass scores as a prop
                    scoreScalers={question.scoreScaler} // Pass scoreScaler as a prop
                />
            );
        default:
            return null;
    }
};

// PropTypes are defined for the 'questions' prop
SurveyForm.propTypes = {
    questions: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            question: PropTypes.string.isRequired,
            options: PropTypes.arrayOf(PropTypes.string),
            min: PropTypes.number,
            max: PropTypes.number,
            score: PropTypes.arrayOf(PropTypes.number), // Add a score prop
            scoreScaler: PropTypes.arrayOf(PropTypes.number), // Add scoreScaler prop
        })
    ).isRequired,
};

export default SurveyForm;