const express=require('express')

const route=express.Router()

//middleware

const auth=function(req,res,next){
     console.log('auth middleware')

     req.user={userId:1,role:'student'}

     if(req.user){
        next()
     } else{
        res.json({
            success:false,
            message:'not a valid user'
        })
     }
}

const isStudent=function(req,res,next){
     console.log('student middleware')

     if(req.user.role=='student'){
        next()
     } else{
        res.json({
            success:false,
            message:"not a student"
        })
     }
}

const isAdmin=function(req,res,next){
     console.log('admin middleware')

     if(req.user.role=='admin'){
        next()
     } else{
        res.json({
            success:false,
            message:'not a admin'
        })
     }
}


//routes

route.get('/student',auth,isStudent,(req,res)=>{
    console.log('student route')
    res.send('this is student')
})

route.get('/admin',auth,isAdmin,(req,res)=>{
     console.log('admin route')
     res.send('this is admin')
})






module.exports=route