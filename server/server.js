const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const cors = require('cors');
const fsp=fs.promises;
const mysql = require("mysql")

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

let con = mysql.createConnection({
  host: "localhost",
  user: "tempName",
  password: "pass"
})

const corsOptions={
    origin:["http://localhost:5173"]
}

app.use(cors(corsOptions))


app.post("/posts/temp",(req,res)=>{
    res.json(req.body)
})


app.post("/posts/createUser",(req,res)=>{
    
})


app.listen("5000", ()=>{console.log("listening on port 5000")})