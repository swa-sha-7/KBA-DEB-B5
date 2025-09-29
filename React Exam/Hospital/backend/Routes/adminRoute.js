import { Router } from "express";

const admin = Router();
const appointment = new Map()

admin.post('/addAppointment',(req,res)=>{
try{
    const {AppointmentId,DoctorName,PatientName,Date,TimeFrom} = req.body;
    if(appointment.get(AppointmentId)){
        res.status(400).json({msg:'Appointment already exist'})
    }
    else{
        try{
        appointment.set(AppointmentId,{DoctorName,PatientName,Date,TimeFrom});
        res.status(201).json({msg:'Appointment successfully entered'})
        }
        catch{
        res.status(400).json({msg:'Something went wrong while setting data'})
        }
    }
}
catch{
    res.status(500).json({msg:'Something went wrong'})
}
})

admin.put('/updateAppointment',(req,res)=>{
try{
    const {AppointmentId,DoctorName,PatientName,Date,TimeFrom} = req.body;
    if(appointment.get(AppointmentId)){
        appointment.set(AppointmentId,{DoctorName,PatientName,Date,TimeFrom});
        res.status(200).json({msg:"Appointment details updated succesfully"})
    }
    else{
        res.status(404).json({msg:"Appointment not found"})
    }
}
catch{
    res.status(500).json({msg:'Something gone wrong'})
}
})

admin.delete('/deleteAppointment',(req,res)=>{
try{
    const {AppointmentId} = req.body;
    if(appointment.get(AppointmentId)){
        appointment.delete(AppointmentId)
        res.status(200).json({msg:'Appointment deleted succesfully'})
    }
    else{
        res.status(404).json({msg:'Appointment not found'})
    }
}
catch{
    res.status(500).json({msg:'Something went wrong'})
}
})

export {admin,appointment};