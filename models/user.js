var mongoose = require('mongoose');

var schema = mongoose.Schema({
     email:String,
     password:String,
     name:String,
     phone:Number
});

module.exports = mongoose.model('userModel', schema);
