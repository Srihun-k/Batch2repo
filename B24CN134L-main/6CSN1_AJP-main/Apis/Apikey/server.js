import express from "express"

const app=express()
const log=console.log
const port=8000
const API_KEY_1=5


function checkAPiKey(req,res,next){
    const key1=parseInt(req.headers["x-api-key_1"])
    const key2=parseInt(req.headers["x-api-key_2"])
    const key=key1+key2
    if(!key1 || !key2){
        return res.status(401).json({message : " NO API key"})
    }else if (key != API_KEY_1 ){
        return res.status(401).json({message:"invald key bro"})
    }
    next()
}

app.get("/",(req,res)=>{
    res.send("your key is correct ,welcome")
})

app.get("/student",checkAPiKey,(req,res)=>{
    res.json([
        { id:1 , name:"srihas"},
        { id:2 , name:"sadie sink"}
    ])
})

app.listen(port,()=>log("running\n","http://localhost:8000"))