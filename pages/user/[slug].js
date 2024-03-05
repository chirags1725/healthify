import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from "@/styles/Home.module.css";


export default function User(){
    const router = useRouter()
    const [data,setData] = useState(null)
    useEffect( ()=>{
        sessionStorage.getItem('userdata') ? setData(JSON.parse(sessionStorage.getItem('userdata'))[0]) : router.push('/');

    },[])


    const userdata = JSON.stringify(data)
    return (
        <>
        <div className={styles.greetings}>
        Welcome, <span> {data && data['customer_name']}</span>
        </div>       
        
        </>
    )
  
}