const mongoose = require("mongoose");
const userSchema= new mongoose.Schema({ 
     name:String,
     post:String,
     salary: Number,
     image:String
})

module.exports = mongoose.model("user", userSchema);