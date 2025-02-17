const mongoose=require('mongoose')

const emp= new mongoose.Schema({
    name:String,
    email:String,
    paswd:Number,
    post:String
})

module.exports=mongoose.model('emp',emp)
