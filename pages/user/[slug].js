import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function User(){
    const [data,setData] = useState(null)
    useEffect(()=>{
        setData(JSON.parse(sessionStorage.getItem('userdata'))[0])

    },[])
    return (
        <>
        {data ? JSON.stringify(data) : "loading"}
        </>
    )
  
}