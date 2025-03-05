const express= require("express");
const app=express();
const cors= require("cors");
const bodyParser = require('body-parser');
 const mongoose= require("mongoose");
 const router= require("./router/router");
require("dotenv").config();

app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/upload', express.static('upload'))

mongoose.connect('mongodb://localhost:27017/multifilehandling').then(()=>{
    console.log("DB connected!!!");
})



 app.use("/user", router);



const Port=process.env.PORT || 5000;
app.listen(Port, ()=>{
    console.log(`server run on  port ${Port}`);
})