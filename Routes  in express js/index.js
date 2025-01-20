const express=require('express')

const port=7000
const app=express();


const sturoute= require('./routes/studentRout')
const empRoute=require('./routes/employeRout')
const proRoute=require('./routes/productRoute')
const hos=require('./routes/hospitalRout')
const gall=require('./routes/galleryRout')



app.use('/students',sturoute)
app.use('/employe',empRoute)
app.use('/product',proRoute)
app.use('/hospital',hos)
app.use('/gallery',gall)




app.listen(port,()=>{
    console.log(`server is running at :port${port}`)
})