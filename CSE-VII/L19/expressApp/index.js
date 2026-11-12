const express = require("express");
const app = express();
const bcrypt = require('bcrypt');

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Working fine!")
})

// app.get("/products/1",(req,res)=>{
//     res.send("you are viewing product of id 1")
// })

// app.get("/products/2",(req,res)=>{
//     res.send("you are viewing product of id 2")
// })

app.get("/products/:id",(req,res)=>{
    console.log(req.params);
    const {id} = req.params;
    res.send(`you are viewing product of id ${id} `)
})

let movies = [
    {
        name:'avanger',
        rating:8.2,
        duration:140
    },
    {
        name:'thor',
        rating:9.2,
        duration:120
    },
    {
        name:'hulk',
        rating:9.4,
        duration:180
    }
]

app.get("/movies/getData",(req,res)=>{
    console.log(req.query);
    const {name} = req.query;

    let movie = movies.find((item)=> item.name==name);
    console.log(movie);

    res.json(movie);

    // res.send("ok");
})

let users = [
    {
        username:"teena",
        password:"teena@123"
    },
    {
        username:'rahul',
        paasword:'rahul@123'
    }
]

app.post("/login",(req,res)=>{
    console.log(req.body);
    const {username,password} = req.body;

    let user = users.find((item)=> item.username==username )

    if(user){
        if(user.password==password){
            return res.status(200).json({msg:'user authentcated!'})
        }else{
            return res.status(200).json({msg:'password incorrect!'})
        }

    }else{
        return res.status(200).json({msg:"user not exist"})
    }

})

app.post("/signup",async (req,res)=>{
    const {username,password} = req.body;

    let existingUser = users.find((item)=> item.username==username );

    if(existingUser){
        return res.json({msg:'username allready exist!'})
    }else{
        let hashPassword = await bcrypt.hash(password,10);
        console.log("paasord",password);
        console.log("hashPAssword",hashPassword);
        let user = {username,password:hashPassword};
        users.push(user);
        return res.json({msg:'signup succesfull'})
    }

    

})


const PORT = 4000;
app.listen(PORT,()=>{
    console.log("server run at port",PORT);
})