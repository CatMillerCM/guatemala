'use client';

import PropTypes from 'prop-types';
import { useRef } from 'react';
import { AnotherDateButton } from '@/components/atoms/another-date-button';
import { LearnButton } from '@/components/atoms/learn-button';
import { MayanDates } from '@/components/atoms/mayan-dates';
import { ShareButton } from '@/components/atoms/share-button';
import { Glyph } from '@/components/molecules/glyph';
import { formatGregorianDate } from '@/utils/format-gregorian-date';
import styles from './date-result.module.css';

const DateResult = ({ haabDate, tzolkinDate, setHaabDate, setTzolkinDate, gregorianDate }) => {
  const resultRef = useRef(null);

  return (
    <div className={styles.resultPage}>
      <div className={styles.shareResult} ref={resultRef}>
        <div className={styles.input}>
          <p className={styles.intro}>For the date:</p>
          <h2 className={styles.gregorianDate}>{formatGregorianDate(gregorianDate).toUpperCase()}</h2>
          <p className={styles.leadIn}>The Mayan Dates are:</p>
        </div>
        <div className={styles.output}>
          {haabDate && tzolkinDate && <MayanDates haabDate={haabDate} tzolkinDate={tzolkinDate} />}
          <div className={styles.glyphs}>
            {haabDate && <Glyph type='haab' glyph={haabDate.split(' ')[1]} />}
            {tzolkinDate && <Glyph type='tzolkin' glyph={tzolkinDate.split(' ')[1]} />}
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.twoButtons}>
          <ShareButton resultRef={resultRef}/>
          <LearnButton/>
        </div>
        <AnotherDateButton setHaabDate={setHaabDate} setTzolkinDate={setTzolkinDate}/>
      </div>
    </div>
  )
};

DateResult.propTypes = {
  haabDate: PropTypes.string.isRequired,
  tzolkinDate: PropTypes.string.isRequired,
  setHaabDate: PropTypes.func.isRequired,
  setTzolkinDate: PropTypes.func.isRequired,
  gregorianDate: PropTypes.string.isRequired
};

export { DateResult };