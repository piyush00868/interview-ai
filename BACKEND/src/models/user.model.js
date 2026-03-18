const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:[true, "Username already exists"]
    },
    email:{
        type:String,
        required:true,
        unique:[true, "Email already exists"]
    },
    password:{
        type:String,
        required:true,
    }
}, {timestamps:true});
const userModel = mongoose.model("users", userSchema); // "users" is the name of the collection in MongoDB where user documents will be stored

module.exports = userModel;
