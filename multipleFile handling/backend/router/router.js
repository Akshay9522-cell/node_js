const express=require('express')

const controller=require('../controller/controller')
const multer=require('multer')
const route=express.Router()
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'upload/'); // Set the folder where files will be saved
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`); // Save file with a unique name
    },
  });
  
  // File filter for allowed extensions (optional)
  const fileFilter = (req, file, cb) => {
    const allowedFileTypes = /jpeg|jpg|png|pdf/;
    const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedFileTypes.test(file.mimetype);
  
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG, PNG, and PDF are allowed.'));
    }
  };
  
  // Multer middleware configuration
  const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit files to 5MB
  });



route.post('/sign',upload.array('image',10),controller.sign)
route.get('/display',controller.display)




module.exports=route