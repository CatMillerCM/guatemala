import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './learn-button.module.css';

const LearnButton = ({ label = 'Learn More' }) => {
  return (
    <Link href='/learn'>
      <button 
        type="button"
        className={styles.button}
      >{label}</button>
    </Link>
  )
};

LearnButton.propTypes = {
  label: PropTypes.string
}

export { LearnButton };
