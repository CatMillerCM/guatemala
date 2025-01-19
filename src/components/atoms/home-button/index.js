import Link from 'next/link';
import styles from './home-button.module.css';

const HomeButton = () => {
  return (
    <Link href='/'>
      <button 
        type="button"
        className={styles.button}
      >Enter New Date</button>
    </Link>
  )
};

export { HomeButton };
