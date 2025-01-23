import PropTypes from 'prop-types';
import styles from './mayan-dates.module.css';

const MayanDates = ({ haabDate, tzolkinDate }) => {
  return (
    <div className={styles.mayanDates}>
      <h2>Haab Date: <span className={styles.output}>{haabDate.toUpperCase()}</span></h2>
      <h2>Tzolk'in Date: <span className={styles.output}>{tzolkinDate.toUpperCase()}</span></h2>
    </div>
  )
};

MayanDates.propTypes = {
  haabDate: PropTypes.string.isRequired,
  tzolkinDate: PropTypes.string.isRequired
};

export { MayanDates };