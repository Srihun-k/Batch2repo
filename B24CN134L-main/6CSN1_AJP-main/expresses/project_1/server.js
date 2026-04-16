import express from "express"

const app=express()
const log=console.log

app.get('/add',(req,res)=>{
    const a=parseInt(req.query.a)
    const b=parseInt(req.query.b)
    if(isNaN(a) || isNaN(b)){
        return res.status(404).json({error:"getout"})
    }
    res.json({result:a+b})
})

app.listen(3000,()=>{
    log("running")
})