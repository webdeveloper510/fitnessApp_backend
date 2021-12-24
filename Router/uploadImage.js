var express =require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const postModel=require('../models/post')

const imageStorage = multer.diskStorage({
    // Destination to store image     
    destination: 'feedImage', 
      filename: (req, file, cb) => {
          cb(null, file.fieldname + '_' + Date.now() 
             + path.extname(file.originalname))
            // file.fieldname is name of the field (image)
            // path.extname get the uploaded file extension
    }
});
const imageUpload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpg)$/)) { 
         // upload only png and jpg format
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
}) 
router.post('/uploadImage', imageUpload.single('image'), (req, res) => {
     res.send({imageUrl:'http://localhost:8000/'+req.file.path})
}, (error, req, res, next) => {
     res.status(400).send({ error: error.message })
})
router.post('/createPost',async function(req,res,next){
    try{
        const data=await questionModel.findOne({user:req.query.id})
        console.log(data)
        res.json({status:"success",data:data})
     }
     catch (err){
         res.json({status:err})
     }
})
const videoStorage = multer.diskStorage({
    destination: 'videos', // Destination to store video 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() 
         + path.extname(file.originalname))
    }
});
const videoUpload = multer({
    storage: videoStorage,
    limits: {
    fileSize: 10000000 // 10000000 Bytes = 10 MB
    },
    fileFilter(req, file, cb) {
      // upload only mp4 and mkv format
      if (!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)) { 
         return cb(new Error('Please upload a video'))
      }
      cb(undefined, true)
   }
})
router.post('/uploadVideo', videoUpload.single('video'), (req, res) => {
    console.log(req.body)
    res.send({videoUrl:'http://localhost:8000/'+req.file.path})
 }, (error, req, res, next) => {
     res.status(400).send({ error: error })
 })
 router.get('/getPosts',async function(req,res,next){
    try{
       const data=await postModel.find({})
       res.json({status:"success",data:data})
    }
    catch (err){
        res.json({status:"error"})
    }
})
router.get('/getPostById',async function(req,res,next){
    try{
       const data=await postModel.find({_id:req.body.id})
       res.json({status:"success",data:data})
    }
    catch (err){
        res.json({status:"error"})
    }
})
module.exports= router