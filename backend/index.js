import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import {Book} from './models/bookModel.js';

const app = express();

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send('Welcome to my  MERN STACK');
});

app.listen(PORT,()=>{
    console.log("test inicio de servidor");
});

mongoose
.connect(mongoDBURL)
.then(()=> {
    console.log(PORT,()=>{
        console.log(`App is listening toi port: ${PORT}`);
    });
})
.catch((error) =>{
    console.log("error");
})