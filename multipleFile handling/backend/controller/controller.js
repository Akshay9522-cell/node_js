const userModel=require('../modal/modal')

const sign=async(req,res)=>{
     
     const imageUrls = req.files.map(file => file.path);
     console.log(imageUrls)
  const defaultImage=imageUrls[0]
      const{name,post,skill}=req.body
      console.log(req.body)

      const data= await userModel.create({
        name,
        post,
        skill,
        defaultImage:defaultImage,
        image:imageUrls
      })
     res.send(data)
}

const display=async(req,res)=>{
      
    const data=await userModel.find()
    res.send(data)
}

module.exports={
    sign,
    display
}