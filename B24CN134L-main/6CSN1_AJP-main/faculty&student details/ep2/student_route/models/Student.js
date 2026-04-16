import mongoose from "mongoose"

const studentschema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

export default mongoose.model("Student", studentschema)