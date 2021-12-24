var mongoose = require('mongoose');

var schema = mongoose.Schema({
     kcal:{type:Number,required:true},
     model: {type: String , required: true},
     carbohydrates:{type:Number,required:true},
     proteins:{type:Number,required:true},
     fat:{type:Number,required:true},
     gramsCarb:{type:Number,required:true},
     gramsProtein:{type:Number,required:true},
     fatGrams:{type:Number,required:true},
     CarbsGramsKg:{type:Number,required:true},
     ProteinGramsKg:{type:Number,required:true},
     FatGramsKg:{type:Number,required:true}


});

module.exports = mongoose.model('caloriesCaluclator', schema);
