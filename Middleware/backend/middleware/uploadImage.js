

const upload=((req,res,next)=>{
     console.log("middleware")
     req.filename='image.png'
     res.send('ok')
     next()
})

module.exports=upload