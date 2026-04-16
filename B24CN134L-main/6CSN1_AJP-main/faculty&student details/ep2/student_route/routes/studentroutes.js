import express from "express"
import Student from "../models/Student.js"

const route = express.Router()

route.post("/students", async (req,res)=>{
    const student = new Student(req.body)
    await student.save()
    res.send(student)
})

route.get("/students", async (req,res)=>{
    const students = await Student.find()
    res.send(students)
})

export default route