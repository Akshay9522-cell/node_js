const mongoose=require('mongoose')


const studentData=new mongoose.Schema({
     name:String,
     age:Number
})

module.exports=mongoose.model('student',studentData)