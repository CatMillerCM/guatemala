import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './glyph.module.css';

const Glyph = ({ glyph }) => {
  return (
    <div className={styles.glyph}>
      <p className={styles.glyphIntro}>The {glyph} glyph is:</p>
      <div className={styles.image}></div>
      {/* <Image
        src={tzlolkinGlyph.src}
        alt={tzlolkinGlyph.alt}
        layout="fill"
        objectFit="cover"
      /> */}
      <p className={styles.glyphInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  )
};

Glyph.propTypes = {
  glyph: PropTypes.string.isRequired
};

export { Glyph };