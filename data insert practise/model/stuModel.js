const mongoose=require('mongoose')

const studata= new mongoose.Schema({
     
    name:String,
    age:Number,
    city:String
})

module.exports=mongoose.model('student',studata)