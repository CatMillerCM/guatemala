import PropTypes from 'prop-types';
import styles from './another-date-button.module.css';

const AnotherDateButton = ({ setHaabDate, setTzolkinDate }) => {
  const handleClick = () => {
    setHaabDate('');
    setTzolkinDate('');
  };

  return (
    <button 
      type="button"
      className={styles.button}
      onClick={handleClick}
    >Convert Another Date</button>
  )
};

AnotherDateButton.propTypes = {
  setHaabDate: PropTypes.func.isRequired,
  setTzolkinDate: PropTypes.func.isRequired
};

export { AnotherDateButton };