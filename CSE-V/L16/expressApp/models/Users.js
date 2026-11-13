const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    age:Number,
    city:String
})

const Users = mongoose.model("Users",userSchema);

module.exports = Users;