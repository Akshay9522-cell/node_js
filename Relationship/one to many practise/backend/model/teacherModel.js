const mongoose=require('mongoose')


const teacherSchema=new mongoose.Schema({
    name:String,
    email:String,
    subid:[{type:mongoose.Schema.Types.ObjectId,ref:'sub'}]
})

module.exports=mongoose.model('tech',teacherSchema)