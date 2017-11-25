import React from 'react';

import styles from './ProgressBar.css';

const ProgressBar = (props) => {
  return (
    <svg height='10' width={props.svgWidth} className={styles.progressbar}>
      {
        props.animationInProgress &&
        <line
          className={styles['progressbar__line']}
          stroke='#b17200'
          strokeWidth='2'
          x1='0'
          y1='1'
          x2='100%'
          y2='1'
          style={{ transform: `translateX(${props.translateValue}%)` }}
        />
      }
    </svg>
  );
};

export default ProgressBar;

