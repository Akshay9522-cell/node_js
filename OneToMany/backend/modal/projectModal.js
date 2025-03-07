const mongoose=require('mongoose')

const projectSchema=new mongoose.Schema({

    project:String,
    techno:String,
    empId:{ type: mongoose.Schema.Types.ObjectId, ref: 'employ' }
})

module.exports=mongoose.model('project',projectSchema)