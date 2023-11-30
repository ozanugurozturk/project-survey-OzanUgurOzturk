import PropTypes from 'prop-types';

const SurveyFormPropType = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.string),
      min: PropTypes.number,
      max: PropTypes.number,
      score: PropTypes.arrayOf(PropTypes.number),
      scoreScaler: PropTypes.arrayOf(PropTypes.number),
    })
  ).isRequired,
  userName: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
  handleRestart: PropTypes.func.isRequired,
};

export default SurveyFormPropType;