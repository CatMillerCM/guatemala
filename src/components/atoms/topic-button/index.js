import PropTypes from 'prop-types';
import Link from 'next/link';

const TopicButton = ({ topic }) => {
  return (
    <Link href={`/${topic.replace(/\s+/g, '-')}`}>
      <button 
        type="button"
      >{topic}</button>
    </Link>
  )
};

TopicButton.propTypes = {
  topic: PropTypes.string.isRequired
};

export { TopicButton };
