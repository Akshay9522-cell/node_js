const akkii=require('../model/stuModel')

const homePage=(req,res)=>{
    res.render('home')
}
const save= async(req,res)=>{
    console.log(req.body)

    const {name,age,city} = req.body
    console.log(name,age,city)

    const data=await akkii.create({
         name:name,
         age:age,
         city:city
        
    })
    console.log(data)
    res.render('home')
}

module.exports={
    homePage,
    save

}