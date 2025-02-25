const authmodel=require('../model/authModel')
const bookmodel=require('../model/bookModel')

const insert=async(req,res)=>{
     const{name,email,city}=(req.body)

     const data=await authmodel.create({
        name,email,city
     })
    res.send(data)
}

const addBook=async(req,res)=>{
     
    const data=await authmodel.find()
    res.send(data)
}

const newbook=async(req,res)=>{
    const{id,name,price}=(req.body)
   const Book=await bookmodel.create({
      bookName:name,
      bookPrice:price,
      authorid:id

   })
   await authmodel.findByIdAndUpdate(id,{$push:{bookid:Book._id}})
   res.send('okk')
}

const display=async(req,res)=>{
     
    const data=await authmodel.find().populate('bookid')
    res.send(data)
}

module.exports={
    insert,
    addBook,
    newbook,
    display
}