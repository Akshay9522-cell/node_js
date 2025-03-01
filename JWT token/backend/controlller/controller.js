const userModel=require('../model/model')
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken')
 require('dotenv').config()

const regis=async(req,res)=>{
      const{name,email,password}=req.body
      // console.log(req.body)

      const salt=await bcrypt.genSalt(10)
      const hashPassword=await bcrypt.hash(password,salt)
      
      const data=await userModel.create({
        name:name,
        email:email,
       password: hashPassword
      })
        res.send(data)
}
const login=async(req,res)=>{
     const{email,password}=req.body
      // console.log(req.body)

      const user=await userModel.findOne({email:email})

      if(!user){
         res.send('email invalid')
      }
     const passwordMatch=await bcrypt.compare(password,user.password)

      if(!passwordMatch){
        res.send('password does not match')
      } 

      const token= await jwt.sign({id:user._id},process.env.JWT_KEY,{expiresIn:'7days'})

    //  console.log(passwordMatch)
    //  console.log(token)
     
     res.send({token:token,user:user})
}

 const authenticate=async(req,res)=>{
     
  try {
    const token=req.header("x-auth-token")
    console.log(token)

    const verify= await jwt.verify(token, process.env.JWT_KEY);
    const User= await userModel.findById(verify.id).select("-password");
    
    res.send(User);

    
  } catch (error) {
    console.log("error due to auth")
  }

 }

module.exports={
    regis,
    login,
    authenticate
}