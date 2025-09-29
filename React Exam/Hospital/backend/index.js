import express,{json} from 'express';
import dotenv from 'dotenv';
import {admin} from './Routes/adminRoute.js'
import cors from 'cors'
import cookieParser from 'cookie-parser';

dotenv.config()
const app = express();

app.use(
    cors({ 
      origin: "http://localhost:3000",
    })
);

app.use(cookieParser());
app.use(express.json());
const port= 5000;
app.use(json())
app.use('/',admin)

app.listen(port,()=>{
    console.log(`Server is listening to port  ${port}`)
})