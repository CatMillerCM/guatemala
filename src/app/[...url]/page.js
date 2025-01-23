import { calendarInfo } from '@/data';
import { LearnButton } from '@/components/atoms/learn-button';
import { HomeButton } from '@/components/atoms/home-button'; 
import styles from './info.module.css';

const Page = ({ params: { url } }) => {
  const infoPageName = url[0].replace(/-/g, ' ');

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{infoPageName.toUpperCase()}</h1>
      <p className={styles.info} dangerouslySetInnerHTML={{ __html: calendarInfo[infoPageName] }}></p>
      <div className={styles.buttons}>
        <LearnButton label="Back to Learning Zone" />
        <HomeButton />
      </div>
    </main>
  );
};

export default Page;
