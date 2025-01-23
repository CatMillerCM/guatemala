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
  const [gregorianDate, setGregorianDate] = useState('');

  if (tzolkinDate && haabDate) {
    return (
      <main className={styles.mainResult}>
        <DateResult
          haabDate={haabDate}
          tzolkinDate={tzolkinDate}
          setHaabDate={setHaabDate}
          setTzolkinDate={setTzolkinDate}
          gregorianDate={gregorianDate}
        />
      </main>
    )
  }

  return (
    <div className={styles.border}>
      <main className={styles.mainInput}>
        <div className={styles.inputContainer}>
          <h1 className={styles.title}>MAYAN CALENDAR CODEX</h1>
          <p className={styles.info}>The Mayan calendar is compromised of 3 interconnected cycles:<br></br> <span className={styles.calendarNames}>the Tzolk’in, the Haab, and the Long Count.</span><br></br>These calendars are mathematically precise and deeply rooted in traditions and myths, often tied to stories about the world's creation. <br></br>In many parts of Guatemala (and Mexico), the Mayan calendar is still used today. <br></br><br></br>This converter focuses on the Tzolk’in and Haab calendars, offering you an insight into the signifcance of the numbers and glyphs for the given date.</p>
          <DateInput
            setHaabDate={setHaabDate}
            setTzolkinDate={setTzolkinDate}
            setGregorianDate={setGregorianDate}
          />
          <p className={styles.disclaimer}>Disclaimer: While I have researched this content, I cannot guarantee that all information is 100% accurate.</p>
        </div>
        <div className={styles.calendarContainer}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.calendarImg}
              src={mayanCalendar}
              alt="Mayan Calendar"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;
