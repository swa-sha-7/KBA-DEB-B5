import express,{json} from 'express';
import dotenv from 'dotenv';
// import {router} from './Routes/loginRoute.js';
import {admin} from './Routes/adminRoute.js'
// import { authenticate } from './Middleware/auth.js';
// import admincheck from './Middleware/admin.js';
// import user from './Routes/userRoute.js';

dotenv.config()

const app = express();

app.use(json())
// app.use('/',router)
app.use('/',admin)   //authenticate,admincheck,
// app.use('/',user)

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to port  ${process.env.PORT}`)
})