import Link from 'next/link'
import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from './box.module.css'

function Box(props) {
    // 1:name,
    // 2:high,
    // 3:lb,
    // 4:up,
    // 5:pv,
    // 6:unit
    const link = `/details/${props.value[0]}`

    if(props.value[4] > props.value[2] && props.value[4] < props.value[3]){
        var result = "Everything looks great."
        
    }
    else if(props.value[4] < props.value[2]){
        var result = "Lower than Minium value!"
    }
    else if(props.value[4] > props.value[3]){
        var result = "Higher than Maximum value!"
    }
    else{
        var result=""
    }
    
  return (
    <>
    <Link href={link} style={{textDecoration:'none', color:'black'}}>
        <div className={props.value[1] === "N" ? styles.testboxgreen : styles.testboxred} >
        <div className={styles.testname}>{props.value[0]}</div>
        
        <div className={styles.boundline}>
        <div className={styles.lbound}>Min value</div>
        <div className={styles.value}>Your Value</div>
        <div className={styles.ubound}>Max Value</div>
        </div>

        <div className={styles.boundline}>
        <div className={styles.lbound}>{props.value[2]} {props.value[5]}</div>
        <div className={styles.value}>{props.value[4]} {props.value[5]}</div>
        <div className={styles.ubound}>{props.value[3]} {props.value[5]}</div>
        </div>
        <div className={styles.result}>{result}</div>


    </div>
    </Link>
    </>
    
  )
}

export default Box