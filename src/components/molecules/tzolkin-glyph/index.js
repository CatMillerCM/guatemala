import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './tzolkin-glyph.module.css';

const TzolkinGlyph = ({ tzlolkinGlyph }) => {
  return (
    <div className={styles.glyph}>
      <div className={styles.image}></div>
      {/* <Image
        src={tzlolkinGlyph.src}
        alt={tzlolkinGlyph.alt}
        layout="fill"
        objectFit="cover"
      /> */}
      <p>Lorem ipsum dolor</p>
    </div>
  )
};

TzolkinGlyph.propTypes = {
  tzlolkinGlyph: PropTypes.string.isRequired
};

export { TzolkinGlyph };