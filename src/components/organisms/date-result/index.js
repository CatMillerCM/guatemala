import PropTypes from 'prop-types';
import { AnotherDateButton } from '@/components/atoms/another-date-button';
import { MayanDates } from '@/components/atoms/mayan-dates';
import { TzolkinGlyph } from '@/components/molecules/tzolkin-glyph';
import styles from './date-result.module.css';

const DateResult = ({ haabDate, tzolkinDate, setHaabDate, setTzolkinDate }) => {
  return (
    <div>
      {tzolkinDate && haabDate && <MayanDates haabDate={haabDate} tzolkinDate={tzolkinDate} />}
      {tzolkinDate && <TzolkinGlyph tzlolkinGlyph={tzolkinDate.split(' ')[1]} />}
      <AnotherDateButton setHaabDate={setHaabDate} setTzolkinDate={setTzolkinDate}/>
    </div>
  )
};

DateResult.propTypes = {
  haabDate: PropTypes.string.isRequired,
  tzolkinDate: PropTypes.string.isRequired,
  setHaabDate: PropTypes.func.isRequired,
  setTzolkinDate: PropTypes.func.isRequired
};

export { DateResult };