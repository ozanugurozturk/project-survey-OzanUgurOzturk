import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RadioQuestion from './questionTypes/RadioQuestion';
import SelectQuestion from './questionTypes/SelectQuestion';
import CheckboxQuestion from './questionTypes/CheckboxQuestion';
import RangeSliderQuestion from './questionTypes/RangeSliderQuestion';

const SurveyForm = ({ questions }) => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  
    const handleAnswer = (answer) => {
      const newAnswers = [...answers];
      newAnswers[step] = answer;
      setAnswers(newAnswers);
    };
  
    const handleNext = () => {
      if (step < questions.length - 1) {
        setStep(step + 1);
      }
    };
  
    return (
      <div>
        {step < questions.length ? (
          renderQuestion(questions[step], answers[step], handleAnswer)
        ) : (
          <div>
            <h2>Summary</h2>
            {answers.map((answer, index) => (
              <p key={index}>Question {index + 1}: {answer}</p>
            ))}
            {/* Advice Text Will be comming here */}
          </div>
        )}
        <button onClick={handleNext} disabled={!answers[step]}>
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
          />
        );
      case 'select':
        return (
          <SelectQuestion
            question={question.question}
            options={question.options}
            answer={answer}
            onAnswer={onAnswer}
          />
        );
      case 'checkbox':
        return (
          <CheckboxQuestion
            question={question.question}
            options={question.options}
            answer={answer}
            onAnswer={onAnswer}
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
      })
    ).isRequired,
  };
  
  export default SurveyForm;