const mongoose=require('mongoose')


const profile=new mongoose.Schema({

    fname:String,
    lname:String,

    userid:{
        type:mongoose.Schema.ObjectId,
        ref:'user'
    }
})
module.exports=mongoose.model('profile',profile)