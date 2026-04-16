import mongoose from "mongoose"

const register = new mongoose.Schema({
    username: String,
    password: String                                    
})

export default mongoose.model("details",register)