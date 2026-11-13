const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Users = require("./models/Users");

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/BML-CSE-V")
    .then(()=>{
        console.log("DB conected!")
    })
    .catch((err)=>{
        console.log("Db not conected!")
    })

app.post('/signup',async (req,res)=>{
    const {username,password,age,city} = req.body;
    let existingUser = await Users.findOne({username});
    if(existingUser){
        return res.status(200).json({msg:'username allready exist'})
    }else{
        await Users.create({username,password,age,city});
        return res.status(200).json({msg:'signup succesfull'})
    }
})

app.post("/login",async (req,res)=>{
    const {username,password} = req.body;
    let existingUser = await Users.findOne({username});
    if(existingUser){
        if(existingUser.password==password){
            //verify user
            //session
            return res.status(200).json({msg:'user login succesfully'})
        }else{
            return res.status(200).json({msg:"password incoorect"})
        }
    }else{
        return res.status(400).json({msg:'username incoorect'})
    }

})


app.get("/",(req,res)=>{
    res.send("working fine")
})

app.get("/about",(req,res)=>{
    let filePath = path.join(__dirname,"views/about.html")
    res.sendFile(filePath)
})

app.get("/data",(req,res)=>{
    let todos = ["game","dance","coding","music"]
    res.json({todos})
})



const PORT = 4000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT)
})