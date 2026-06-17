const fs = require("fs")
const path = require("path")
const express = require("express")
const app = express()
const cors = require('cors')
const fsp=fs.promises

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

const corsOptions={
    origin:["http://localhost:5173"]
}

app.use(cors(corsOptions))


app.post("/posts/temp",(req,res)=>{
    res.json(req.body)
})

//create user

const createPostFs = async (req,res) => {
    const files = await fsp.readdir(path.join(__dirname,"users"))
    if(files!=[]){
        for(const i of files){
            console.log(file)
        }
    }
}

app.post("/posts/createUser",(req,res)=>{
    createPostFs(req,res)
})


app.listen("5000", ()=>{console.log("listening on port 5000")})