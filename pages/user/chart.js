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
      console.log(elem)
    })




    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const anatomyImg = new Image();
    anatomyImg.src = '/images/anatomy.png'; // Path relative to the `public` directory

    anatomyImg.onload = () => {
      ctx.drawImage(anatomyImg, 0, 0, canvas.width, canvas.height);

       // Draw a line to point to the heart
       ctx.beginPath();
       ctx.moveTo(320, 140); // Starting point of the line
       ctx.lineTo(400, 80); // Ending point of the line (coordinates of the heart)
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


  return <>
  {data && data['test_values'].map((elem)=>{
    if(elem['is_highlighted']){
    return <div key={elem['test_parameter_id']} className={styles.testhg}>{elem['parameter_name']}</div>
      
    }
    return <div key={elem['test_parameter_id']} className={styles.test}>{elem['parameter_name']}</div>
  })}
  <canvas ref={canvasRef} width={600} height={600} />
  </>
};

export default BodyCanvas;
