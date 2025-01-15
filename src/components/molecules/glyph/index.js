import PropTypes from 'prop-types';
import Image from 'next/image';
import { tzolkinGlyphImages } from '@/assets/tzolkin-glyphs';
import { haabGlyphImages } from '@/assets/haab-glyphs';
import { haabMonths, tzolkinGlyphs } from '@/data';
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
      <p className={styles.glyphDefinition}>{type === 'haab' ? haabMonths[glyph].definition : tzolkinGlyphs[glyph].definition}</p>
      <p className={styles.glyphInfo}>{type === 'haab' ? haabMonths[glyph].info : tzolkinGlyphs[glyph].info}</p>
    </div>
  )
};

Glyph.propTypes = {
  type: PropTypes.string.isRequired,
  glyph: PropTypes.string.isRequired
};

export { Glyph };