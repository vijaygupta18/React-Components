import React, { useState,useEffect } from "react";
import './style.css';
 
const Status=()=>{
   const [rec,setrec]=useState(0);
   const [cnf,setcnf]=useState(0);
   const [deaths,setdeaths]=useState(0);


  useEffect(()=>{
    fetch('https://covid19.mathdro.id/api/countries/india').then(response =>{
        return response.json()}).then(data=>{
            setcnf(data.confirmed.value)
            setrec(data.recovered.value)
            setdeaths(data.deaths.value)
            
        });
  },[]);
  
   
     

    return(
        <>
        <div className='status'>
        <p id='ok'>Comfirmed ={cnf} </p>
        <p>Recovered ={rec} </p>
        <p>Death = {deaths} </p>
        </div>
        </>
    );
}

export default Status;