
const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({

    name:String,
    post:String,
    salary:Number,
    special:String,
    image:String,
    email:String,
    password:String
})

module.exports=mongoose.model('mission',userSchema)
