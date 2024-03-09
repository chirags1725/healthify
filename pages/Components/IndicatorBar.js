import React from 'react';
import styles from './IndicatorBar.module.css';

const IndicatorBar = ({ lowerValue, upperValue, normalRange }) => {
    

  return (
    <div className={styles.indicatorBar}>
      <div className={styles.indicator} style={{ left: `${lowerPercentage}%`, width: `${normalPercentage}%` }}></div>
      <div className={styles.lower} style={{ width: `${lowerPercentage}%` }}></div>
      <div className={styles.upper} style={{ left: `${upperPercentage}%`, width: `${100 - upperPercentage}%` }}></div>
    </div>
  );
};

export default IndicatorBar;
