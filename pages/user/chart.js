// pages/user/chart.js
import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/chart.module.css'
import { useRouter } from 'next/router';
import IndicatorBar from '../../Components/IndicatorBar';


const BodyCanvas = () => {

  const router = useRouter()

  const canvasRef = useRef(null);
  const text = "text";
  const [data, setData] = useState(null)

  useEffect(() => {
    sessionStorage.getItem('userdata') ? setData(JSON.parse(sessionStorage.getItem('userdata'))[0]) : router.push('/');

    // sessionStorage.getItem('userdata') ?? setData(sessionStorage.getItem('userdata'))
    data && data['test_values'].map((elem) => {
      console.log(elem['parameter_name'])
    })




    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const anatomyImg = new Image();
    anatomyImg.src = '/images/anatomy.png'; // Path relative to the `public` directory

    anatomyImg.onload = () => {
      ctx.drawImage(anatomyImg, 0, 0, canvas.width, canvas.height);

       // Draw a line to point to the heart
       ctx.beginPath();
       ctx.moveTo(320, 200); // Starting point of the line
       ctx.lineTo(400, 120); // Ending point of the line (coordinates of the heart)
       ctx.strokeStyle = 'red';
       ctx.lineWidth = 2;
       ctx.stroke();
 

       ctx.beginPath();
       ctx.moveTo(280, 200); // Starting point of the line
       ctx.lineTo(480, 260); // Ending point of the line (coordinates of the heart)
       ctx.strokeStyle = 'red';
       ctx.lineWidth = 2;
       ctx.stroke();


       ctx.beginPath();
       ctx.moveTo(290, 240); // Starting point of the line
       ctx.lineTo(140, 280); // Ending point of the line (coordinates of the heart)
       ctx.strokeStyle = 'red';
       ctx.lineWidth = 2;
       ctx.stroke();
      // Draw a line, box, and text here...
    };

    anatomyImg.onerror = (error) => {
      console.error('An error occurred while loading the anatomy image:', error);
    };
  }, []);
  console.log(data)


  return <div className={styles.all}>
  {/* {data && data['test_values'].map((elem)=>{
    if(elem['is_highlighted']){
    return <div key={elem['test_parameter_id']} className={styles.testhg}>{elem['parameter_name']}</div>
      
    }
    return <div key={elem['test_parameter_id']} className={styles.test}>{elem['parameter_name']}</div>
  })} */}
  <canvas ref={canvasRef} width={600} height={600} className={styles.canvas} />
  <div className={styles.headingblood}>
    <h4>BLOOD COUNTS</h4>
  <div className={styles.boxup}>
  
  <div className={styles.box}>
    <div className={styles.tests}>
      <div className={styles.head}><b>Test name</b></div>
      <ul>
        <li>RBC count</li>
        <li>Total Leukocyte count</li>
        <li>Abs. Neutrophil Count</li>
      </ul>
    </div>
    <div className={styles.value}>
    <div className={styles.head}><b>Result</b></div>
    <ul>
      <li>3.3</li>
      <li>3.1</li>
      <li>1.55</li>
    </ul>

    </div>

  </div>
    <center style={{padding:'8px',color:'rgba(255,0,0,.6)'}}>+1 Tests please watchout</center>
  
  </div>
  </div>


  <div className={styles.headingkid}>
    <h4>KIDNEY PROFILE</h4>
  <div className={styles.boxup}>
  
  <div className={styles.box}>
    <div className={styles.tests}>
      <div className={styles.head}><b>Test name</b></div>
      <ul>
        <li>Blood Urea</li>
        <li>Sodium Carbonate</li>
        <li>Blood Urea Nitrogen (BUN)</li>
      </ul>
    </div>
    <div className={styles.value}>
    <div className={styles.head}><b>Result</b></div>
    <ul>
      <li>179.0</li>
      <li>7.0</li>
      <li>82.2</li>
    </ul>

    </div>

  </div>
    <center style={{padding:'8px',color:'rgba(255,0,0,.6)'}}>+1 Tests please watchout</center>
  
  </div>
  </div>


<div className={styles.headingdia}>
    <h4>DIABETES MONITORING</h4>
  <div className={styles.boxup}>
  
  <div className={styles.box}>
    <div className={styles.tests}>
    </div>

  </div>
    <center style={{padding:'8px'}}>Everything looks good</center>
  
  </div>
  </div>






  <div className={styles.headingliver}>
    <h4>LIVER PROFILE</h4>
  <div className={styles.boxup}>
  
  <div className={styles.box}>
    <div className={styles.tests}>
      <div className={styles.head}><b>Test name</b></div>
      <ul>
        <li>SGPT (ALT)</li>
        <li>SGDT (AST)</li>
      </ul>
    </div>
    <div className={styles.value}>
    <div className={styles.head}><b>Result</b></div>
    <ul>
      <li>61</li>
      <li>48</li>
    </ul>

    </div>

  </div>
    <center style={{padding:'8px',color:'rgba(255,0,0,.6)'}}>Please watchout</center>
  
  </div>
  </div>


  <div className={styles.headinganemia}>
    <h4>ANEMIA STUDIES</h4>
  <div className={styles.boxup}>
  
  <div className={styles.box}>
    <div className={styles.tests}>
      <div className={styles.head}><b>Test name</b></div>
      <ul>
        <li>Hemoglobin</li>
      </ul>
    </div>
    <div className={styles.value}>
    <div className={styles.head}><b>Result</b></div>
    <ul>
      <li>9.3</li>
    </ul>

    </div>

  </div>
    <center style={{padding:'8px',color:'rgba(255,0,0,.6)'}}>Please watchout</center>
  
  </div>
  </div>


<div className={styles.headingelec}>
<h4>ELECTROLYTES</h4>
<div className={styles.boxup}>

<div className={styles.box}>
<div className={styles.tests}>
  <div className={styles.head}><b>Test name</b></div>
  <ul>
    <li>Chloride</li>
  </ul>
</div>
<div className={styles.value}>
<div className={styles.head}><b>Result</b></div>
<ul>
  <li>107.4</li>
</ul>

</div>

</div>
<center style={{padding:'8px',color:'rgba(255,0,0,.6)'}}>Please watchout</center>

</div>
</div>


<div className={styles.headingmin}>
<h4>MINERAL PROFILE</h4>
<div className={styles.boxup}>

<div className={styles.box}>
<div className={styles.tests}>
  <div className={styles.head}><b>Test name</b></div>
  <ul>
    <li>Phosphorous</li>
  </ul>
</div>
<div className={styles.value}>
<div className={styles.head}><b>Result</b></div>
<ul>
  <li>9.0</li>
</ul>

</div>

</div>
<center style={{padding:'8px',color:'rgba(255,0,0,.6)'}}>Please watchout</center>

</div>
</div>





</div>

};

export default BodyCanvas;
