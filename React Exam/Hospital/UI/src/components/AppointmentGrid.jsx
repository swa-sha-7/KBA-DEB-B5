import React from 'react'
import AppointmentCard from './AppointmentCard'
import { useState,useEffect } from 'react';

const AppointmentGrid = ({isHome}) => { 
const [appointment, setAppointment] = useState([]);
const appointmentList = isHome?appointment.slice(0,3):appointment;
useEffect(() => {
  const  fetchappointments=async()=>{
    try{
      const res= await fetch('/api/viewAppointments');
      const data=await res.json();
      setAppointment(data);
    }
    catch(error){
      console.log(error);
    }
  
  };
  fetchappointments();
},[]);


return (
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
    {appointmentList.map((appointment)=>(
        <AppointmentCard key={appointment.appointmentno}appointment={appointment}/>
    ))}
  </div>
)
}

export default AppointmentGrid