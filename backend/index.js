import express from "express";
import { PORT } from "./config.js";

const app = express();

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send('Welcome to my  MERN STACK');
});

app.listen(PORT,()=>{
    console.log("test inicio de servidor");
});