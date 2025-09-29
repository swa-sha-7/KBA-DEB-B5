import React from 'react'
const AppointmentCard = ({appointment}) => {
  return (
    <div className=' bg-yellow-100  rounded-md flex flex-col items-right justify-center mx-5 my-5 py-10 pl-10 shadow-2xl'>
        <h2 className=' font-bold text-lg text-black '>Appointment Id:{appointment .AppointmentId}</h2>
        <br />
        <div className='flex'><h2 className='text-black font-bold'>Appointment Id :</h2><h3 className='  text-lg text-blue-500 pl-3'> {appointment .AppointmentId}</h3></div>
        <div className='flex'><h2 className='text-black font-bold'>Doctor's Name  :</h2><h3 className='  text-lg text-blue-500 pl-3'> {appointment .DoctorName}</h3></div>
        <div className='flex'><h2 className='text-black font-bold'>Patient's Name :</h2><h3 className='  text-lg text-blue-500 pl-3'> {appointment .PatientName}</h3></div>
        <div className='flex'><h2 className='text-black font-bold'>Appointment Time :</h2><h3 className='  text-lg text-blue-500 pl-3'> {appointment .TimeFrom}</h3></div>
        <div className='flex'><h2 className='text-black font-bold'>Appointment Date :</h2><h3 className='  text-lg text-blue-500 pl-3'> {appointment .Date}</h3></div>
    </div>
  )
}

export default AppointmentCard