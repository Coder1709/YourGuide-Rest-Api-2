//importing necessary modules

import dotenv from 'dotenv';
import express from 'express';

//import files modules

import connectDB from './config/db.js'
import router from './routes/routes.js';



//initializing express

const app = express();

//middleware

app.use(express.json());
dotenv.config();

//database connection

connectDB();

//routes
app.use('/api/user' , router);

//Declaring PORt
const PORT = process.env.PORT || 5000;

//server start

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
});




