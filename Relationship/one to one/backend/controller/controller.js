const userModel=require('../model/userModel')
const profileModel=require('../model/profileModel')

const save=async(req,res)=>{
   
    const{ id,username,email,fname,lname}=req.body

    const User=await userModel.create({
        id,
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

const Search=async(req,res)=>{
     const{id}=req.body
     console.log(req.body)
    const data=await userModel.find({id:id})
    res.send(data)
}


module.exports={
    save,
    Display,
    Search
}