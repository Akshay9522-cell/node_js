const express=require('express')

const app=express()
const port=8000

app.get('/',(req,res)=>{
    res.send("hwl i am full stack developer")
})

app.get('/home',(req,res)=>{
    res.send("this is my home page")
})
app.get('/contact',(req,res)=>{
    res.send("contact page is loaded")
})



app.post('/datasave',(req,res)=>{
     res.send('data save succesfully')
})





app.get('/student/home',(req,res)=>{
    res.send('this is student home page')
})

app.get('/student/about',(req,res)=>{
    res.send('this is student sbout page')
})
app.get('/student/fees',(req,res)=>{
    res.send('this is student fees page')
})

app.get('/teacher/home',(req,res)=>{
    res.send('this is teacher home page')
})
app.get('/teacher/about',(req,res)=>{
    res.send('this is teacher about page')
})
app.get('/teacher/dept',(req,res)=>{
    res.send('this is teacher department page')
})



app.listen(port,()=>{
    console.log(`server is started:port${port}`)
})