import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom';
const AddAppointment = () => {
    const [AppointmentId,setAppointmentid]=useState('');
    const [DoctorName,setDoctorname]=useState('');
    const [PatientName,setPatientname]=useState('');
    const [Date,setDate]=useState('');
    const [TimeFrom,setTimefrom]=useState('');
    const navigate =useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        const newservice ={
            AppointmentId,
            DoctorName,
            PatientName,
            Date,
            TimeFrom
        }
        try{
            const response =  await fetch('/api/addAppointment',
                {
                    method:"POST",
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify(newappointment)

                }
            )
            if(response.status === 403)
            {
              alert("you have no permission");
              navigate('/Home')
            }
             else if(response.ok){
                alert("Appointment Added Successfully");
                navigate('/Home')

            }
            else{
                alert("Failed to Add Appointment");
            }
        }
        catch(error){
            console.error("this is the error",error);
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
    <form
      onSubmit={handleSubmit}
      className="bg-white p-10 rounded-xl shadow-xl w-full max-w-lg"
    >
      <h2 className="text-3xl font-semibold text-center text-black mb-8">
        Add Appointment Details
      </h2>
  
      <div className="mb-5">
        <label
          htmlFor="AppointmentId"
          className="block text-sm font-medium text-gray-800"
        >
          Appointment Id
        </label>
        <input
          type="text"
          name="AppointmentId"
          value={AppointmentId}
          onChange={(e) => setAppointmentid(e.target.value)}
          className="w-full mt-2 px-5 py-3 border border-gray-300 rounded-xl "
          placeholder="Enter Appointment Id"
        />
      </div>
  
      <div className="mb-5">
        <label
          htmlFor="DoctorName"
          className="block text-sm font-medium text-gray-800"
        >
          Doctor Name
        </label>
        <input
          type="text"
          name="DoctorName"
          value={DoctorName}
          onChange={(e) => setDoctorname(e.target.value)}
          className="w-full mt-2 px-5 py-3 border border-gray-300 rounded-xl"
          placeholder="Enter Doctor Name"
        />
      </div>
  
      <div className="mb-5">
        <label
          htmlFor="PatientName"
          className="block text-sm font-medium text-gray-800"
        >
          Patient Name
        </label>
        <input
          type="text"
          name="PatientName"
          value={PatientName}
          onChange={(e) => setPatientname(e.target.value)}
          className="w-full mt-2 px-5 py-3 border border-gray-300 rounded-xl "
          placeholder="Enter Patient Name"
        />
      </div>
  
      <div className="mb-5">
        <label
          htmlFor="Date"
          className="block text-sm font-medium text-gray-800"
        >
          Appoinment Date
        </label>
        <input
          type="date"
          name="Date"
          value={Date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full mt-2 px-5 py-3 border border-gray-300 rounded-xl "
        />
      </div>
  
      <div className="mb-5">
        <label
          htmlFor="TimeFrom"
          className="block text-sm font-medium text-gray-800"
        >
          Appoinment Time
        </label>
        <input
          type="time"
          name="TimeFrom"
          value={TimeFrom}
          onChange={(e) => setTimefrom(e.target.value)}
          className="w-full mt-2 px-5 py-3 border border-gray-300 rounded-xl "
        />
      </div>
  
      <button
        type="submit"
        className="w-full py-3 px-6 bg-black text-white rounded-xl shadow-lg hover:bg-gray-700 "
      >
        Submit
      </button>
    </form>
  </div>
      );
  
}

export default AddAppointment