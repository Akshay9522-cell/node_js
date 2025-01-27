const employModel=require('../model/employModel')

const homePage=(req,res)=>{
     res.render('home')
}

const saveData= async(req,res)=>{
     const{name,age}=req.body
     console.log(name,age)
    
     const data= await employModel.create({
         name:name,
         age:age
     })
     console.log(data)

     res.send('done')
}

const searchData=async(req,res)=>{
       const{age}=req.body
       const data=await employModel.find({age:age})
       res.send(data)
}






module.exports={
    homePage,
    saveData,
    searchData
}