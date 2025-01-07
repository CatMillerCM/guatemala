import PropTypes from 'prop-types';
import styles from './submit-button.module.css';

const SubmitButton = ({ onClick, disabled }) => {
  return (
    <button 
      type="button"
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >Submit</button>
  )
};

SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

export { SubmitButton };