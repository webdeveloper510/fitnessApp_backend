var express =require('express');
var router = express.Router();
const questionModel=require('../models/questionsModel')
let {data,status}=''
router.post('/questions',async function(req,res,next){
    console.log(req.body)
    var questionData= questionModel(req.body)
   try {
    var data = await questionData.save()
    console.log(data)
    res.json({status:"success",data:data})
   }
   catch (err){
       res.json(err)
    //    res.json({status:"error"})
   }
    
})
router.get('/getUserQuestionsData',async function(req,res,next){
    console.log(req.query.id)
    try{
       const data=await questionModel.findOne({user:req.query.id})
       console.log(data)
       res.json({status:"success",data:data})
    }
    catch (err){
        res.json({status:err})
    }
})

router.get('/getAllUserQuestionsData',async function(req,res,next){
    try{
       const data=await questionModel.find({})
       res.json({status:"success",data:data})
    }
    catch (err){
        res.json({status:"error"})
    }
})
module.exports= router