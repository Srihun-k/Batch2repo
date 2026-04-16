import express from "express"

const app=express()
const log=console.log

app.get("/",(req,res)=>{
    res.send("hello express")
})

app.get("/about",(req,res)=>{
    res.send("about page")
})

app.get("/contact",(req,res)=>{
    res.send("contact")
})

app.listen(3000,()=>{
    log("running on port 3000")
})
