const express = require('express')
const bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors =require('cors')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
var user= require('./Router/userController');
var router = express.Router();
const port = 8000;
const MONGOURL="mongodb+srv://fitness_user:fitness%40123@fitness.78rx0.mongodb.net/fitness?retryWrites=true&w=majority"
mongoose
.connect(MONGOURL, {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(() =>console.log('DB Connected!'))
.catch(err => {
console.log(err);
});
app.get('/', (req,res)=>{
    res.send("This is working Mate")
})
app.use('/user',user);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});