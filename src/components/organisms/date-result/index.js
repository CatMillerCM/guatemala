import PropTypes from 'prop-types';
import { AnotherDateButton } from '@/components/atoms/another-date-button';
import { MayanDates } from '@/components/atoms/mayan-dates';
import { Glyph } from '@/components/molecules/glyph';
import { formatGregorianDate } from '@/utils/format-gregorian-date';
import styles from './date-result.module.css';

const DateResult = ({ haabDate, tzolkinDate, setHaabDate, setTzolkinDate, inputDate }) => {
  return (
    <div className={styles.resultPage}>
      <div className={styles.input}>
        <p className={styles.intro}>For the date:</p>
        <p className={styles.gregorianDate}>{formatGregorianDate(inputDate)}</p>
        <p className={styles.leadIn}>The Mayan Dates are:</p>
      </div>
      <div className={styles.output}>
        {haabDate && tzolkinDate && <MayanDates haabDate={haabDate} tzolkinDate={tzolkinDate} />}
        <div className={styles.glyphs}>
          {haabDate && <Glyph glyph={haabDate.split(' ')[1]} />}
          {tzolkinDate && <Glyph glyph={tzolkinDate.split(' ')[1]} />}
        </div>
      </div>
      <AnotherDateButton setHaabDate={setHaabDate} setTzolkinDate={setTzolkinDate}/>
    </div>
  )
};

DateResult.propTypes = {
  haabDate: PropTypes.string.isRequired,
  tzolkinDate: PropTypes.string.isRequired,
  setHaabDate: PropTypes.func.isRequired,
  setTzolkinDate: PropTypes.func.isRequired,
  inputDate: PropTypes.string.isRequired
};

export { DateResult };