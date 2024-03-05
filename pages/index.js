import styles from "@/styles/Home.module.css";
import { useRouter } from 'next/router';
import { useState } from "react";

export default function Home() {

  const router = useRouter();
  // State to manage the input value
  const [bookingid, setBookingid] = useState('');
  const [name, setName] = useState('');

  // Event handler for input change
  const handleChangeInBookingId = (event) => {
    setBookingid(event.target.value);
  };

  const handleChangeInName = (event) => {
    setName(event.target.value);
  };

  // Event handler for form submission (optional)
  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("submit").disabled = true;
    // Process the input value, e.g., submit it to the backend
    fetch(`http://localhost:3000/api/hello?id=${bookingid}`).then((a)=>{
      return a.json()
    }).then((parsed)=>{
      console.log(parsed[0]['customer_name'])
      if (parsed[0]['customer_name'].toLowerCase() == name.toLowerCase()){
        sessionStorage.setItem('userdata',JSON.stringify(parsed))
        router.push(`user/${bookingid}`);
      }
      else{

      }
    }).catch((err)=>{
      console.log(err)
    document.getElementById("submit").disabled = false;

    })
    console.log('Input value:', bookingid);
  };

  return (
    <>
    <div className={styles.login}>
      <div className={styles.img}>
        <img src="/images/image.png"></img>
      </div>
      <div className={styles.form}>
      <div className={styles.formbox}>

        <b><h1>Enter your details</h1></b>
        <form>
        <input type="text" value={bookingid}
          onChange={handleChangeInBookingId} placeholder="Enter your Booking id" ></input>
          <br></br><input type="text" value={name} 
          onChange={handleChangeInName} placeholder="Enter your name" ></input>
          <br></br><button id="submit" onClick={handleSubmit}>Submit</button>
          </form>
      </div>
      </div>
    </div>
    </>
  );
}