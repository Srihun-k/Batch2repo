import mongoose from "mongoose"


const facultyschema = new mongoose.Schema({
    name: String,
    subject:String
});

export default mongoose.model("faculty",facultyschema)