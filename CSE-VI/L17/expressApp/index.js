const express = require("express");
const app = express();
const path = require("path");

///
///

app.get("/",(req,res)=>{
    res.send("Home page")
})

app.get("/about",(req,res)=>{
    res.send(`<h2>This is my about page</h2>`)
})

app.get("/payment",(req,res)=>{
    let filePath = path.join(__dirname,"views/payment.html")
    res.sendFile(filePath)
})


const PORT = 4000;
app.listen(PORT,()=>{
    console.log("server run at port",PORT)
})