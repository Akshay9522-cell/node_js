const userModel=require('../model/model')

const insert=async(req,res)=>{
     
     try {
        const myimg = req.file.filename;
        console.log(myimg)
        const{name,post,salary}=req.body
       
   
        const data=await userModel.create({
           name,
           post,
           salary,
            image:myimg
        })
   
        res.send('okk')
     } catch (error) {
        console.log("errror")
     }
   
}

const display=async(req,res)=>{
      
    const data=await userModel.find()
    res.send(data)
}

module.exports={
    insert,
    display
}