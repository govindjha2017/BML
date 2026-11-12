const express = require("express");
const app = express();
const path = require("path");

app.get("/",(req,res)=>{
    res.send("Hello world!")
})

app.get("/about",(req,res)=>{
    res.send("This is my about page")
})

app.get("/contact",(req,res)=>{
    res.send(`<h1>This is my contact page</h1>`)
})

app.get("/payment",(req,res)=>{
    let filePath = path.join(__dirname,"payment.html")
    res.sendFile(filePath)
})

const PORT = 4000;
app.listen(PORT,()=>{
    console.log("server run at port",PORT);
})