const mongoose=require('mongoose')

const authorShema=new mongoose.Schema({

    name:String,
    email:String,
    city:String,
    bookid:[{type:mongoose.Schema.Types.ObjectId,ref:"book"}]
})

module.exports=mongoose.model('author',authorShema)