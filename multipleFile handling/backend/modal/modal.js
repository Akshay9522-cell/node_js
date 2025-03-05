const mongoose = require("mongoose");
const userSchema= new mongoose.Schema({ 
     name:String,
     post:String,
     skill: String,
     defaultImage:String,
     image:[String]
})

module.exports = mongoose.model("user", userSchema);