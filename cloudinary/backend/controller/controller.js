const userModel=require('../model/model')

const insert=async(req,res)=>{
    const{name,age,imgname}=req.body

    const data=await userModel.create({
        name,
        age,
        imgname
    })
    res.send(data)
}

const display=async(req,res)=>{
      
   const data=await userModel.find()
   res.send(data)
}


module.exports={
    insert,
    display
}