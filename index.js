const express = require("express");
const dotenv = require("dotenv");
const mongo = require("./shared")
const studentMentorRouter = require("./router/studentMentor")

dotenv.config()

const app = express();
app.use(express.json())

mongo.connectMongoose()

app.use('/', (req,res,next) => {
    
    {"'Home Page-Domain URL'. Further Routes are provided in the gitHub"}
    console.log("Middle Ware")
    next();
})

app.use('/user',studentMentorRouter)

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log("Port Started Listening")
})