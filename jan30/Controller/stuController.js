const stuModel=require('../Model/stuModel')

const homePage=(req,res)=>{
    
    res.render("home")
}

const save= async(req,res)=>{
      console.log(req.body)

      const{name,age}=req.body

      const data=await stuModel.create({
         name:name,
         age:age
      })
      res.send('done')
}




module.exports={
    homePage,
    save
}