import PropTypes from 'prop-types';
import styles from './mayan-dates.module.css';

const MayanDates = ({ haabDate, tzolkinDate }) => {
  return (
    <div className={styles.mayanDates}>
      <p>Haab date: <span className={styles.output}>{haabDate}</span></p>
      <p>Tzolk'in date: <span className={styles.output}>{tzolkinDate}</span></p>
    </div>
  )
};

MayanDates.propTypes = {
  haabDate: PropTypes.string.isRequired,
  tzolkinDate: PropTypes.string.isRequired
};

export { MayanDates };