const userModel=require('../modal/modal')

const bcrypt =require("bcryptjs");

const regis=async(req,res)=>{
    const myimg = req.file.filename;
    console.log(myimg)
      const{name,post,salary,special,email,password}=req.body

      const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, salt);

      const data=await userModel.create({
         name,
         post,
         salary,
         special,
         image:myimg,
         email,
         password:hash

      })

 

      res.send('okk')
}


module.exports={
    regis
}