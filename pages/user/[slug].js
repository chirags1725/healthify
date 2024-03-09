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
  }, []);

  const userdata = JSON.stringify(data);
  return (
    <>
    <div className={styles.logobox}>
      <div className={styles.logo}>
      <Image className={styles.image} src="/images/logo.webp" width={128} height={49.6} />
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
    </>
  );
}
