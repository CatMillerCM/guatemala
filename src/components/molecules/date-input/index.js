'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';
import { SubmitButton } from '@/components/atoms/submit-button';
import { getDaysElapsed, getHaabDate, getTzolkinDate } from '@/utils';
import styles from './date-input.module.css';

const DateInput = ({ setTzolkinDate, setHaabDate, setInputDate }) => {
  const [disabled, setDisabled] = useState(true);

  const getMayanDates = (date) => {
    const daysElapsed = getDaysElapsed(date);

    const tzolkinDate = getTzolkinDate(daysElapsed);
    const haabDate = getHaabDate(daysElapsed);

    setTzolkinDate(tzolkinDate);
    setHaabDate(haabDate);
  };

  const handleSubmit = () => {
    const dateInput = document.getElementById('date').value;

    setInputDate(dateInput);
    getMayanDates(dateInput);
  };

  return (
    <div className={styles.dateInput}>
      <label htmlFor="date" className={styles.label}>Select a date:</label>
      <input
        type="date"
        id="date"
        className={styles.input}
        onChange={(e) => setDisabled(!Boolean(e.target.value))}
      />
      <SubmitButton onClick={handleSubmit} disabled={disabled}/>
    </div>
  )
};

DateInput.propTypes = {
  setTzolkinDate: PropTypes.func.isRequired,
  setHaabDate: PropTypes.func.isRequired,
  setInputDate: PropTypes.func.isRequired
};

export { DateInput };