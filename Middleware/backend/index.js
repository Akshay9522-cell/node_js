const express=require('express')

const cors=require('cors')
const image=require('./middleware/uploadImage')

const app=express()
app.use(cors())


app.get('/home',(req,res)=>{
     
   try {
     console.log("home data")
     throw new error("home page error")
   } catch (error) {
      res.status(400).send({msg:"Server out of service"})
   }

    // const status=true
    // if(status){
    //     console.log('home data')
    //     res.status(200).send('home page')
    // } else{
    //     res.status(400).send('home page error')
    // }
})

app.use((req,res,next)=>{
     console.log("middleware")
     req.name="akshay"
    next()
})

app.get('/myhome',image,(req,res,next)=>{
     console.log('home')
     console.log(req.name)
     console.log(req.filename)
     res.send('homepage')
     next()
})


app.get('/about',(req,res)=>{
     console.log('about')
     res.send('about page')
    
})

app.use((req,res)=>{
    console.log("middleware3")
   
})
app.listen(5000,()=>{
    console.log('server')
})



