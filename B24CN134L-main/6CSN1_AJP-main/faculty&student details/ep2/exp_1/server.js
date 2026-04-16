import express from "express"
import mongoose from "mongoose"
import routes from "./routes/routes.js"
import cors  from "cors"

const log=console.log
const app = express();

mongoose.connect("mongodb://localhost:27017/details").then(()=>{
    log("DB ok");
})

app.use(express.json(),cors());

app.use("/", routes);

app.listen(4000, ()=>{
   log("Server running at http://localhost:4000");
})
