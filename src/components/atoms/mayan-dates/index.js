import PropTypes from 'prop-types';
import styles from './mayan-dates.module.css';

const MayanDates = ({ haabDate, tzolkinDate }) => {
  return (
    <div className={styles.mayanDates}>
      <p>Haab date: {haabDate}</p>
      <p>Tzolk'in date: {tzolkinDate}</p>
    </div>
  )
};

MayanDates.propTypes = {
  haabDate: PropTypes.string.isRequired,
  tzolkinDate: PropTypes.string.isRequired
};

export { MayanDates };