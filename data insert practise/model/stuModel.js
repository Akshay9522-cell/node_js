
const mongoose=require('mongoose')

const stuSchema=new mongoose.Schema({

    name:String,
    age:Number,
    dob:Number
})

module.exports=mongoose.model('student',stuSchema)