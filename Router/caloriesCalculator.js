var express =require('express');
var router = express.Router();
const caloriesCaluclator=require('../models/caloriesCalculatorModel')
let {data,status}=''
router.post('/caloriesCalculator',async function(req,res,next){
    console.log(req)
    var caloriesCalculatorData= caloriesCaluclator(req.body)
   try {
    var data = await caloriesCalculatorData.save()
    console.log(data)
    res.json({status:"success",data:data})
   }
   catch (err){
       res.json({status:"error"})
   }
    
})
module.exports= router