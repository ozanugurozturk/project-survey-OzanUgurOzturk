import PropTypes from 'prop-types';

const SurveyResultPopupPropType = {
    questions: PropTypes.arrayOf(PropTypes.object).isRequired,
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    totalScore: PropTypes.number.isRequired,
    onClosePopup: PropTypes.func.isRequired,
};

export default SurveyResultPopupPropType;