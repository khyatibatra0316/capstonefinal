import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieparser from "cookie-parser";
import connectDB from './config/mongodb.js'
const app=express();
const port=process.env.PORT || 4000
connectDB();
app.use(express.json())
app.use(cookieparser())
app.use(cors({credentials:true}))
app.get('/',(req,res)=>res.send("API working"))
app.listen(port,()=>console.log(`Server is running on PORT:${port}`))