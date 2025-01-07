'use client';

import { useState } from 'react';
import { MayanDates } from '@/components/atoms/mayan-dates';
import { DateInput } from '@/components/molecules/date-input';
import styles from './page.module.css';
import { TzolkinGlyph } from '@/components/molecules/tzolkin-glyph';

const Page = () => {
  const [tzolkinDate, setTzolkinDate] = useState('');
  const [haabDate, setHaabDate] = useState('');

  return (
    <main className={styles.main}>
      <DateInput
        setHaabDate={setHaabDate}
        setTzolkinDate={setTzolkinDate}
      />
      <MayanDates haabDate={haabDate} tzolkinDate={tzolkinDate} />
      <TzolkinGlyph tzlolkinGlyph={tzolkinDate.split(' ')[1]} />
    </main>
  );
}

export default Page;
