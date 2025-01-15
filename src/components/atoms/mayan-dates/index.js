import PropTypes from 'prop-types';
import styles from './mayan-dates.module.css';

const MayanDates = ({ haabDate, tzolkinDate }) => {
  return (
    <div className={styles.mayanDates}>
      <h2>Haab date: <span className={styles.output}>{haabDate}</span></h2>
      <h2>Tzolk'in date: <span className={styles.output}>{tzolkinDate}</span></h2>
    </div>
  )
};

MayanDates.propTypes = {
  haabDate: PropTypes.string.isRequired,
  tzolkinDate: PropTypes.string.isRequired
};

export { MayanDates };