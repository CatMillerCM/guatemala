'use client';

import { useState } from 'react';
import { DateInput } from '@/components/molecules/date-input';
import { DateResult } from '@/components/organisms/date-result';
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
      <DateInput
        setHaabDate={setHaabDate}
        setTzolkinDate={setTzolkinDate}
      />
    </main>
  );
}

export default Page;
