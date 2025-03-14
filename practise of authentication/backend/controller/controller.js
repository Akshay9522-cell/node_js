const userModal=require('../modal/modal')
const bcrypt =require("bcryptjs");
const jwt = require('jsonwebtoken');
const  Cookie = require('cookie-parser')
require('dotenv').config()

const sign=async(req,res)=>{
     const{name,email,password}=req.body
       
     console.log(req.body)
     const salt = bcrypt.genSaltSync(10);
     const hash = bcrypt.hashSync(password, salt);

     const data=await userModal.create({
        name,
        email,
        password:hash

     })
     res.send('ok')
    }

     const login=async(req,res)=>{
         const{email,password}=req.body

         const user=await userModal.findOne({email:email})

         if(!user){
            res.send('email invalid')
         }
         const passwordMatch = await bcrypt.compare(password, user.password);
          
          if(!passwordMatch){
            res.send('password is invalid')
          }
           const token = jwt.sign({ id: user._id },process.env.JWT_KEY, {expiresIn: '1h'});
      

           console.log(token)
           res.send({token:token})
     } 
     const auth=async(req,res)=>{
          
        const token = req.header('Authorization');

         const verify=jwt.verify(token, process.env.JWT_KEY)
         console.log(verify)

         const userData=await userModal.findById(verify.id).select('-password')
         res.send(userData)

     }

    module.exports={
        sign,
        login,
        auth
    }
