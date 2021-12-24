var express =require('express');
var router = express.Router();
const userModel=require('../models/user')
var passwordHash = require('password-hash')
const jwt = require('jsonwebtoken');
const jwt_decode =require("jwt-decode")

let status;
let statusCode;
let data;
let token;
router.post('/registerUser',async function(req,res,next){
    var datetime = new Date();
    console.log(req.body)
     var userCreate =  new userModel(req.body);
    userCreate.joinDate = datetime
    let pass = passwordHash.generate(userCreate.password)
    userCreate.password=pass
    let dbUser;
    try{
        dbUser = await userModel.find({email:req.body.email});      
         if(dbUser.length>0){q
            data="Email already exists!!",
            status="failure",
            statusCode=100
         }
         else{
            data=await userCreate.save();
            status="success",
            statusCode=200
         }
    }
    catch(err){
        data="Server error!!",
        status="failure",
        statusCode=100
        
    }
    res.json({status,statusCode,data});
})

router.post('/registerAdmin',async function(req,res,next){
    var datetime = new Date();
     var adminCreate =  new userModel(req.body);
     adminCreate.joinDate = datetime
    let pass = passwordHash.generate(adminCreate.password)
    adminCreate.password=pass
    let dbUser;
    try{
        dbUser = await userModel.find({email:req.body.email});      
         if(dbUser.length>0){q
            data="Email already exists!!",
            status="failure",
            statusCode=100
         }
         else{
            data=await adminCreate.save();
            status="success",
            statusCode=200
         }
    }
    catch(err){
        data="Server error!!",
        status="failure",
        statusCode=100
        
    }
    res.json({status,statusCode,data});
})

router.post('/login',async function(req,res,next){
    let loginUser;
   
    try {
        console.log(req.body)
      loginUser=  await userModel.findOne({email:req.body.email});
      if(passwordHash.verify(req.body.password,loginUser.password)){
           const tokenData =jwt.sign({ sub: loginUser._id }, 'shhhhhhared-secret', { expiresIn: '7d' });
    //    let data1=loginUser + jwt.sign({ secret: Buffer.from('shhhhhhared-secret', 'base64', { expiresIn: '7d' }),algorithms: ['RS256'] })
       data=loginUser,
        status="success",
        statusCode=200,
        token=tokenData
        console.log( jwt_decode(tokenData) 
        )
      }
        else{
            data="invalid User Details!!",
            status="failure",
            statusCode=100  
  
        }
    }
    catch(err){
        console.log(err)
        data=err,
        status="failure",
        statusCode=100  
    }
    res.json({status,statusCode,data,token});
})
module.exports= router