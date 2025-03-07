const mongoose=require('mongoose')

const empSchema=new mongoose.Schema({
    name:String,
    post:String,
    projectId:[{ type: mongoose.Schema.Types.ObjectId, ref: 'project' }]


})
module.exports=mongoose.model('employ',empSchema)