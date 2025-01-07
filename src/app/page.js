'use client';

import { useState } from 'react';
import { getDaysElapsed, getHaabDate, getTzolkinDate } from '@/utils';
import styles from './page.module.css';

const Page = () => {
  const [disabled, setDisabled] = useState(true);
  const [tzolkinDate, setTzolkinDate] = useState('');
  const [haabDate, setHaabDate] = useState('');

  const getMayanDates = (date) => {
    const gregorianDate = new Date(date);
    const daysElapsed = getDaysElapsed(gregorianDate);

    const tzolkinDate = getTzolkinDate(daysElapsed);
    const haabDate = getHaabDate(daysElapsed);

    setTzolkinDate(tzolkinDate);
    setHaabDate(haabDate);
  }

  const handleSubmit = () => {
    const dateInput = document.getElementById('date').value;

    getMayanDates(dateInput)
  };

  return (
    <main className={styles.main}>
      <label htmlFor="date">Select a date:</label>
      <input type="date" id="date" name="date" onChange={(e) => setDisabled(!Boolean(e.target.value))}/>
      <button type="button" id="submit" onClick={handleSubmit} disabled={disabled}>Submit</button>
      <p>Tzol'in date: {tzolkinDate}</p>
      <p>Haab date: {haabDate}</p>
    </main>
  );
}

export default Page;
