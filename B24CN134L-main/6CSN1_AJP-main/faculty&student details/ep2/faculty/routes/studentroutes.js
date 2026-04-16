import express from "express"
import Student from "../models/Student.js"
import Faculty from "../models/Faculty.js"
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

route.post("/faculty", async (req,res)=>{
    const faculty = new Faculty(req.body)
    await faculty.save()
    res.send(faculty)
})

route.get("/faculty", async (req,res)=>{
    const faculty = await Faculty.find()
    res.send(faculty)
})

export default route