const empModal=require('../modal/empModal')
const projectModal=require('../modal/projectModal')

const insert=async(req,res)=>{

    const{name,post}=req.body
    const{project,techno}=req.body

    const empData=await empModal.create({
        name,
        post

    })


    const proData=await projectModal.create({
            project,
            techno,
            empId:empData._id


    })

     await empModal.findByIdAndUpdate(empData._id,{ $push: {  projectId :proData._id }})
    res.send('okkk')
     

   
}

const display=async(req,res)=>{
     
      const data=await empModal.find().populate('projectId')

      res.send(data)
}

const add=async(req,res)=>{

    const{project,techno,empid}=req.body
    console.log(req.body)
     
    const proData=await projectModal.create({

        project,
        techno,
        empId: empid
        

    })
    await empModal.findByIdAndUpdate(empid,{ $push: {  projectId :proData._id }})
    res.send('okk')
}

const projectData=async(req,res)=>{

     const data=await projectModal.find().populate('empId')
     res.send(data)
}


module.exports={
     insert,
     display,
     add,
     projectData
}