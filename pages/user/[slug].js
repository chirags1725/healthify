import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Homepage.module.css";
import Image from "next/image";

export default function User() {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    sessionStorage.getItem("userdata")
      ? setData(JSON.parse(sessionStorage.getItem("userdata"))[0])
      : router.push("/");
      
  }, [] );

  
        let groups= []
        let arr=[]
    if(data){
        
        data['test_values'].forEach(test => {
        if(test['parameter_value'].toLowerCase() === "head"){
            if(arr.length > 0){
                groups.push(arr)
            }
            arr=[test['parameter_name']]
        }
            else{
                arr.push(JSON.stringify(test))

            }
        
    })};
    if (arr.length>0){
        groups.push(arr)
    }

      console.log(groups)

  const userdata = JSON.stringify(data);
  return (
    <>
    <div className={styles.cover}>
    <div className={styles.logobox}>
      <div className={styles.logo}>
      <Image className={styles.image} src="/images/logo.webp" width={128} height={49.6} alt="logo"/>
      <hr></hr>
      Healthy india ki trusted lab
      </div>
      </div>
      <div className={styles.heading}>
        <span>smart</span>
        <br />Health Report

        <div className={styles.hr}><div className={styles.circle}>
        </div></div>

        
        

      </div>
      
      <div className={styles.img} >      
      <img className={styles.image} src="/images/health-tech.png" alt="logo"/>

      </div>
      <div className={styles.name}>
        <span>Prepared for</span>
        <br></br><span>{data && data.customer_name}</span>
      </div>
      </div>
      <div className={styles.djw} style={{height:1000}}>dwqnqwj</div>
      xdjwi
    </>
  );
}
