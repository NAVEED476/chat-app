const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.json({message:"this is the get request"})
})

app.listen(5000,(req,res)=>{
    console.log("server is running at port 5000")
})

