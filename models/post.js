var mongoose = require('mongoose');
const {Schema} =require('mongoose')
var schema = mongoose.Schema({
     user:{type:Schema.Types.ObjectId,ref:'userModel'},
     imageUrl:String,
     desc:String,
     title:String,
     videoUrl:String
     
});

module.exports = mongoose.model('postModel', schema);
