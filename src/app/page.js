'use client';

import Image from 'next/image';
import { useState } from 'react';
import { DateInput } from '@/components/molecules/date-input';
import { DateResult } from '@/components/organisms/date-result';
import mayanCalendar from '@/assets/mayan-calendar.png';
import styles from './page.module.css';

const Page = () => {
  const [tzolkinDate, setTzolkinDate] = useState('');
  const [haabDate, setHaabDate] = useState('');

  if (tzolkinDate && haabDate) {
    return (
      <main className={styles.main}>
        <DateResult
          haabDate={haabDate}
          tzolkinDate={tzolkinDate}
          setHaabDate={setHaabDate}
          setTzolkinDate={setTzolkinDate}
        />
      </main>
    )
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Mayan Calendar Converter</h1>
      <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <DateInput
        setHaabDate={setHaabDate}
        setTzolkinDate={setTzolkinDate}
      />
      <div className={styles.calendarContainer}>
        <Image
          className={styles.calendarImg}
          src={mayanCalendar}
          alt="Mayan Calendar"
        />
      </div>
    </main>
  );
}

export default Page;
