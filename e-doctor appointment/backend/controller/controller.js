const docModel=require('../model/model')

const insert=async(req,res)=>{
    const{name,speciality,email,city,paswd}=(req.body)
    const data= await docModel.create({
        name ,
        speciality ,
        email,
        city,
        paswd
    })
    res.send(data)
}

const doctorLogin=async(req,res)=>{
    const{email,paswd}=req.body
     
    try {
        const Doctorlogin = await docModel.findOne({email:email});
        if (!Doctorlogin)
        {
          res.status(400).send({msg:"Invalid Email!"})
        }
    
        if (Doctorlogin.paswd!=paswd)
        {
            res.status(400).send({msg:"Invalid Credentials!"});
        }
    
        res.status(200).send(Doctorlogin);
         console.log(Doctorlogin)
       } catch (error) {
          console.log(error);
       }
    }

   
    const doctorSearch=async(req,res)=>{
        const{name,speciality}=req.body

        const Doctor=await docModel.find({$or:[{"name":name},{speciality:speciality}]})
        console.log(Doctor);
      res.status(200).send(Doctor);
     
    }




module.exports={
    insert,
    doctorLogin,
    doctorSearch
}