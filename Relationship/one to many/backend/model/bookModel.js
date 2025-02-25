const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({

    bookName:String,
    bookPrice:String,
    authorid:{
        type:mongoose.Schema.Types.ObjectId,ref:'author'
    }
})
module.exports=mongoose.model('book',bookSchema)