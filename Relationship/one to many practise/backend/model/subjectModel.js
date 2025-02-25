const mongoose=require('mongoose')

const subSchema=new mongoose.Schema({
    subName:String,
    teacherid:{
        type:mongoose.Schema.Types.ObjectId,ref:"tech"
    }

})
module.exports=mongoose.model('sub',subSchema)