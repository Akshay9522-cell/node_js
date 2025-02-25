const teacher=require('../model/teacherModel')
const subject=require('../model/subjectModel')

const insert=async(req,res)=>{
       const{name,email}=(req.body)
      console.log(req.body)
       const data = await teacher.create({
        name:name,
        email:email

       })
      console.log(data)
     res.send(data)
}

const display=async(req,res)=>{
     
     const data=await teacher.find()
     res.send(data)
}

const addSub=async(req,res)=>{
    
     const{id,subj}=req.body
     console.log(req.body)
     const data=await subject.create({
      subName:subj,
      teacherid:id
     })
     await teacher.findByIdAndUpdate(id,{$push:{subid:data._id}})
   res.send('okk')
}
 
const all=async(req,res)=>{
    
    const data=await teacher.find().populate('subid')
    res.send(data)
}


module.exports={
    insert,
    display,
    addSub,
    all
}