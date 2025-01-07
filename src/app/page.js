'use client';

import { useState } from 'react';
import { DateInput } from '@/components/molecules/date-input';
import styles from './page.module.css';
import { MayanDates } from '@/components/atoms/mayan-dates';

const Page = () => {
  const [tzolkinDate, setTzolkinDate] = useState('');
  const [haabDate, setHaabDate] = useState('');

  return (
    <main className={styles.main}>
      <DateInput
        setTzolkinDate={setTzolkinDate}
        setHaabDate={setHaabDate}
      />
      <MayanDates haabDate={haabDate} tzolkinDate={tzolkinDate} />
    </main>
  );
}

export default Page;
