const mongoose=require('mongoose')


const user=new mongoose.Schema({

    username:String,
    email:String
})
module.exports=mongoose.model('user',user)