const mongoose=require('mongoose')

const doctor=new mongoose.Schema({
    name:String ,
  speciality:String ,
  email:String ,
  city: String ,
  paswd: Number

})
module.exports=mongoose.model('doc',doctor)