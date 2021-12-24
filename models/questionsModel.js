const mongoose = require('mongoose');
const {Schema} =require('mongoose')

var schema = mongoose.Schema({
    user:{type:Schema.Types.ObjectId,ref:'userModel'},
    trainer:{type:Schema.Types.ObjectId,ref:'userModel'},
    name:{type:String,required:true},
    profession: {type: String , required: true},
    sex:{type:String,required:true},
    age:{type:Number,required:true},
    weight:{type:Number,required:true},
    height:{type:Number,required:true},
    brm:{type:Number,required:true},
    activityLevel:{type:String,required:true},
    tdee:{type:Number,required:true},
    waist:{type:Number,required:true},
    arm:{type:Number,required:true},
    photo:{type:Number,required:false},
    steps:{type:String,required:true},
    trainingDays:{type:Number,required:true},
    fatMass:{type:String,required:true},
    fatStorage:{type:String,required:true},
    storagePoint:{type:String,required:true},
    diet:{type:String,required:true},
    intolerances:{type:String,required:false},
    mealsInDay:{type:String,required:true}


});

module.exports = mongoose.model('questions', schema);