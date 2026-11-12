const express = require("express");
const app = express();
const path = require("path");


app.get('/',(req,res)=>{
    res.send("HOME PAGE")
})

app.get("/about",(req,res)=>{
    res.send("about page")
})

app.get("/payment",(req,res)=>{
    // res.send(`<h1>This is my payment page</h1>`)
    let filePath = path.join(__dirname,"payment.html")
    res.sendFile(filePath);
})

const PORT = 4000;
app.listen(PORT,()=>{
    console.log("server run at port",PORT)
});