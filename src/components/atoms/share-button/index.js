'use client';

import PropTypes from 'prop-types';
import { useRef } from 'react';
import { toPng } from 'html-to-image';
import styles from './share-button.module.css';

// to do - share icon
// to do - text for share and make prettier

const ShareButton = ({ resultRef }) => {
  const handleShare = async () => {
      const image = await toPng(resultRef.current);

      if (navigator.canShare) {
        const blob = await (await fetch(image)).blob();
        const file = new File([blob], "mayan-date-result.png", { type: "image/png" });

        await navigator.share({
          files: [file],
          title: "My Mayan Glyphs",
          text: `Check out the Mayan glyphs for my date: `,
        });
      } else {
        alert("Your browser does not support sharing images.");
      }
  };

  return (
    <button 
      type="button"
      className={styles.button}
      onClick={handleShare}
    >Share Result</button>
  )
};

ShareButton.propTypes = {
  resultRef: PropTypes.object.isRequired,
};

export { ShareButton };
