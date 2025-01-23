const home=(req,res)=>{
    res.render('home')
}
const about=(req,res)=>{
    res.render('about')
}

const stumodel=require('../model/stuModel')
  
  const stuSave1= async(req,res)=>{
      const{name,age,dob}=req.body
      console.log(name,age,dob)

      const data= await stumodel.create({

          name:name,
          age:age,
          dob:dob
      })
      console.log(data)
      res.send("data")
      res.render('home')
  }



module.exports={
    home,
    about,
    stuSave1
}