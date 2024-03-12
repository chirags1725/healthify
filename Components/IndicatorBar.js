import React from 'react';
import styles from './IndicatorBar.module.css';

const IndicatorBar = (props) => {

  // const div = createElement('div')
  // if (props.pv > props.)

    

  return (
    <div className={styles.indicatorBar}>
      <div className={styles.low}>{'<'}{props.lb}{parseFloat(props.pv) < parseFloat(props.lb) ? <div className={styles.yours}>{props.pv}</div>: ""}</div>
      <div className={styles.normal}>{props.lb} - {props.ub}{ parseFloat(props.lb) < parseFloat(props.pv) && parseFloat(props.pv) < parseFloat(props.ub) ? <div className={styles.yours}>{props.pv}</div>: ""}</div>
      <div className={styles.high}>{'>'}{props.ub}{parseFloat(props.pv) > parseFloat(props.ub) ? <div className={styles.yours}>{props.pv}</div>: ""}</div>
    </div>
  );
};

export default IndicatorBar;
