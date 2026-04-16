import express from "express"
import schema from "../models/schema.js"

const route = express.Router()

route.post("/login", async (req, res)=>{
    const {username, password} = req.body;
    const details = await schema.findOne({username, password});
    if(!details){
        return res.send({message: "Invalid Login!"})
    }
    return res.send({message: "login Done"});

})

route.post("/register", async (req, res)=>{
    const username = req.body["username"];
    const password = req.body["password"];

    if(username && password){
        return res.send(await schema.insertOne({
            username,password
        }))
    }
    res.send({message: "Enter"});
})

export default route;