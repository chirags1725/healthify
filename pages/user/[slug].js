import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Homepage.module.css";
import Image from "next/image";
import OpenAI from 'openai'
import Tests from "@/Components/tests";
import Link from "next/link";

export default function User() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [dataai, setDataai] = useState(null)
  const [group, setgroup] = useState(null)

  

  // const dataai='{ "Hemoglobin": "Measures the amount of oxygen-carrying protein in red blood cells", "RBC Count": "Counts the number of red blood cells in a sample of blood", "PCV": "Measures the volume percentage of red blood cells in the blood", "MCV": "Measures the size of red blood cells", "MCH": "Measures the amount of hemoglobin in red blood cells", "MCHC": "Measures the concentration of hemoglobin in red blood cells", "RDW (CV)": "Evaluates the variation in the size of red blood cells", "RDW-SD": "Measures the standard deviation of red blood cell distribution width", "TLC": "Total white blood cell count", "DIFFERENTIAL LEUCOCYTE COUNT": "Breakdown of different types of white blood cells", "Neutrophils": "Type of white blood cell involved in fighting infection", "Lymphocytes": "Type of white blood cell that helps the body fight off germs", "Monocytes": "Type of white blood cell that helps to fight infection", "Eosinophils": "Type of white blood cell that helps to fight off parasites", "Basophils": "Type of white blood cell involved in allergic reactions", "Absolute leukocyte counts": "Total count of each type of white blood cell", "Platelet Count": "Measures the number of platelets in a sample of blood", "MPV": "Measures the size of platelets", "PCT": "Percentage of platelets in the blood", "PDW": "Measures the variation in platelet size", "P-LCR": "Platelet large cell ratio", "P-LCC": "Platelet large cell count", "Mentzer Index": "Used to distinguish between iron-deficiency anemia and thalassemia" }' 



  const openai = new OpenAI({apiKey:"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",dangerouslyAllowBrowser: true});

  async function main() {
  //   const completion = await openai.chat.completions.create({
  //     model:"gpt-3.5-turbo", 
  //     messages:[{"role": "user", "content": "make a json with the format ['organ(for which the test is conducted)':,brief(in max 20 words):] for the tests [Hemoglobin RBC Count PCV MCV MCH MCHC RDW (CV) RDW-SD TLC DIFFERENTIAL LEUCOCYTE COUNT Neutrophils Lymphocytes Monocytes Eosinophils Basophils Absolute leukocyte counts Neutrophils. Lymphocytes. Monocytes. Eosinophils. Basophils. Platelet Count Mean Platelet Volume (MPV) PCT PDW P-LCR P-LCC Mentzer Index]"}],
  //     response_format:{ type: "json_object" }
  
  
  //   })
  //   sessionStorage.setItem('dataai',completion.choices[0].message.content)
  // console.log(completion.choices[0].message.content)
  //   setDataai(completion.choices[0].message.content);


  }

  useEffect(() => {
    if (!sessionStorage.getItem('dataai')){main()}
    else{
    setDataai(sessionStorage.getItem(`dataai`));

    }

  setgroup(JSON.parse(sessionStorage.getItem("testdata")))


    
  
  }, [])
  

  useEffect(() => {
    sessionStorage.getItem("userdata")
      ? setData(JSON.parse(sessionStorage.getItem("userdata"))[0])
      : router.push("/");
      
  }, [] );

  return (
    <>
    <div className={styles.cover}>
    <div className={styles.logobox}>
        <div></div>
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
        </div>
        </div>

        
        

      </div>

      <div style={{marginLeft:'40px',marginTop:"20px",fontSize:"20px",fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>An Insightful Health Analytics Report
        <br/>for Easier Understanding </div>     
      
      <div className={styles.img} >      
      <img className={styles.image} src="/images/health-tech.png" alt="logo"/>

      </div>
      <div className={styles.name}>
        <span>Prepared for</span>
        <br></br><span>{data && data.customer_name}</span>
      </div>
      </div>
      <center style={{marginTop:'60px',marginBottom:'20px'}}><h1>
        Tests
      </h1>
      </center>
      <div className={styles.chartbutton}>
        <div></div>
        <div >
      <Link href={"/user/chart"} style={{textDecoration:'none',color:'black'}}>
      <div className={styles.chart}>
        Chart view
        </div>
      </Link>
      </div>
      </div>
      

      {group&&group.map((e)=>{
        return <Tests key={e[0]} group={e}/>
      })}
      {/* {group&& (group).map(group =>
  group.slice(1).map(jsonString => JSON.parse(jsonString).parameter_name))} */}


      {/* {dataai && JSON.parse(dataai)['Hemoglobin']} */}
    </>
  );
}

