import PropTypes from 'prop-types';
import Image from 'next/image';
import { tzolkinGlyphImages } from '@/assets/tzolkin-glyphs';
import { haabGlyphImages } from '@/assets/haab-glyphs';
import styles from './glyph.module.css';

// to do - alts of glyphs 

const Glyph = ({ type, glyph }) => {
  return (
    <div className={styles.glyph}>
      <p className={styles.glyphIntro}>The {glyph} glyph is:</p>
      <Image
        src={type === 'haab' ? haabGlyphImages[glyph] : tzolkinGlyphImages[glyph]}
        alt=''
      />
      <p className={styles.glyphInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  )
};

Glyph.propTypes = {
  type: PropTypes.string.isRequired,
  glyph: PropTypes.string.isRequired
};

export { Glyph };