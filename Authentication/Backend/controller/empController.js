const empModel=require('../model/empModel')


const Regis=async(req,res)=>{
    const{name,email,paswd,post}=req.body
    
    const data=await empModel.create({
        name,
        email,
        paswd,
        post
    })

     console.log(req.body)
     res.send(data)
}

const Login= async(req,res)=>{
      
      const{email,paswd}=req.body

      try {
        const Email=await empModel.findOne({email:email})

         if(!Email){
            res.status(400).send({msg:"invalid email"})
         }

          if(Email.paswd!=paswd){
            res.status(400).send({msg:"invalid password"})
          }

          res.status(200).send(Email)

      } catch (error) {
        console.log('error')
      }
}




module.exports={
    Regis,
    Login
}