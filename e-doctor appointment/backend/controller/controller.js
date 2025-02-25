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
        const Doctor = await docModel.findOne({email:email});
        if (!Doctor)
        {
          res.status(400).send({msg:"Invalid Email!"})
        }
    
        if (Doctor.paswd!=paswd)
        {
            res.status(400).send({msg:"Invalid Credentials!"});
        }
    
        res.status(200).send(Doctor);
         console.log(Doctor)
       } catch (error) {
          console.log(error);
       }
    }






module.exports={
    insert,
    doctorLogin
}