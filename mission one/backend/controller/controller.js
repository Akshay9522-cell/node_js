const userModel=require('../modal/modal')

const regis=async(req,res)=>{
    const myimg = req.file.filename;
    console.log(myimg)
      const{name,post,salary,special}=req.body

      const data=await userModel.create({
         name,
         post,
         salary,
         special,
         image:myimg

      })

 

      res.send('okk')
}


module.exports={
    regis
}