import { HomeButton } from '@/components/atoms/home-button'; 
import { TopicButton } from '@/components/atoms/topic-button';
import styles from './learn.module.css';

const Page = () => {
  return (
    <main className={styles.main}>
      <div>
        <h2 className={styles.title}>The Mayan Calenders</h2>
        <p className={styles.intro}>Learn more about each traditional calendar by clicking on the relevant button below.</p>
      </div>
      <TopicButton topic="The Haab Calendar" />
      <TopicButton topic="The Tzolk'in Calendar" />
      <TopicButton topic="The Long Count Calendar" />
      <TopicButton topic="The Calendar Round" />
      <TopicButton topic="The Lords Of The Night" />
      <p className={styles.disclaimer}>Disclaimer: While I have researched this content, I cannot guarantee that all information is 100% accurate.<br></br>In addition, a lot of this information is lifted from various websites and studies I read while learning about the Mayan Calendar, with some structure help from ChatGPT.<br></br>Please see the references section on the project's readme on Github.</p>
      <HomeButton />
    </main>
  );
};

export default Page;
