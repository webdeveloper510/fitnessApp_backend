const express = require('express')
const bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors =require('cors')
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
const multer = require('multer');
var user= require('./Router/userController');
var calories =require('./Router/caloriesCalculator')
var question =require('./Router/questions')
var imageUpload1= require('./Router/uploadImage')
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
app.use('/post',imageUpload1)
app.use('/user',user);
app.use('/calories',calories),
app.use('/que',question),
app.use('/videos',express.static(process.cwd()+'/videos'))
app.use('/feedImage',express.static(process.cwd()+'/feedImage'))
// app.use('/imageUpload',imageUpload1),
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});