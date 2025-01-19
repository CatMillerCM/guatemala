import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './topic-button.module.css';

const TopicButton = ({ topic }) => {
  return (
    <Link href={`/${topic.replace(/\s+/g, '-')}`}>
      <button 
        type="button"
        className={styles.button}
      >{topic}</button>
    </Link>
  )
};

TopicButton.propTypes = {
  topic: PropTypes.string.isRequired
};

export { TopicButton };
