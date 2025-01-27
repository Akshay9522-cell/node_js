const mongoose=require('mongoose')

const employInfo= new mongoose.Schema({
    name:String,
    age:Number
})

module.exports= mongoose.model('Employ',employInfo)