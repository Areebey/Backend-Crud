import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import route from "./routes/user.js"

const app = express();

app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGO_URI;

mongoose.connect(MONGOURL).then(()=>{
    console.log("Database Connected!")
    app.listen(PORT, ()=>{
        console.log(`Server is running on Port ${PORT}`)
    })
}).catch((error)=>{
    console.log("Message ",error)
})

app.use("/api/user", route)