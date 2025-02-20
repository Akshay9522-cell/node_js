const userModel=require('../model/userModel')
const profileModel=require('../model/profileModel')

const save=async(req,res)=>{
   
    const{ username,email,fname,lname}=req.body

    const User=await userModel.create({
        username,
        email
    })

    const Profile=await profileModel.create({
        fname,
        lname,
        userid:User._id
    })
    res.send('data save')
}

const Display=async(req,res)=>{
     
    const mydata= await profileModel.find().populate('userid')
    res.send(mydata)
}


module.exports={
    save,
    Display
}