import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import studentroutes from "./routes/studentroutes.js"

const app = express()
const log = console.log

app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/6csn1")
.then(()=>log("mongo done"))
.catch(err=>log(err))

app.use("/api", studentroutes)

app.listen(3000, ()=>{
    log("running")
})