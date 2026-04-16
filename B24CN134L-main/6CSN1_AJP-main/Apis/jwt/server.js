import express from "express"
import jwt from "jsonwebtoken"

const log=console.log
const app=express()
app.use(express.json())

const secret_key="sadiesink"

const user={
    id : 1,
    username:"srihun",
    password:"srihun"
}

app.post("/login",(req,res)=>{
    const {username,password} = req.body

    if(username==user.username && password==user.password){
        const token=jwt.sign(
            {id: user.id , username: user.username},
            secret_key,
            { expiresIn: "1h"}
        )
        return res.json({token})
    }

    res.status(401).json({message : "invalid credentials"})
})


//middleware

function verifytoken(req,res,next){
    const authHeader= req.headers["authorization"]

    if(!authHeader){
        return res.status(401).json({message:"missing token"})
    }

    const token=authHeader.split(" ")[1]

    jwt.verify(token,secret_key,(err,decode)=>{
        if(err){
            return res.status(401).json({message:"invalid token"})
        }

        req.user=decode
        next()
    })
}


app.get("/profile",verifytoken,(req,res)=>{
    res.json({
        message: "welcome to profile",
        user:req.user
    })
})
app.listen(8000,()=>{
    log("server: http://localhost:8000")
})