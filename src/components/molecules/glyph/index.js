import PropTypes from 'prop-types';
import Image from 'next/image';
import { tzolkinGlyphImages } from '@/assets/tzolkin-glyphs';
import { haabGlyphImages } from '@/assets/haab-glyphs';
import { haabData, tzolkinData } from '@/data';
import styles from './glyph.module.css';

const Glyph = ({ type, glyph }) => {
  return (
    <div className={styles.glyph}>
      <Image
        src={type === 'haab' ? haabGlyphImages[glyph] : tzolkinGlyphImages[glyph]}
        alt={`Image of ${glyph} Glyph`}
      />
      <p className={styles.glyphDefinition}>{type === 'haab' ? haabData[glyph].definition : tzolkinData[glyph].definition}</p>
      <p className={styles.glyphInfo}>{type === 'haab' ? haabData[glyph].info : tzolkinData[glyph].info}</p>
    </div>
  )
};

Glyph.propTypes = {
  type: PropTypes.string.isRequired,
  glyph: PropTypes.string.isRequired
};

export { Glyph };