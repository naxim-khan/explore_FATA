require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const mongoose = require('mongoose');
const indexRoutes = require('./routes/index');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended:true}));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;
// Connect Mongodb
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("MongoDb connected Successfully...!");
  }).catch((err)=>{
    console.log("caught error connecting mongodb :",err);
  });

app.use('/', indexRoutes);

app.listen(port, ()=>{
    console.log("Server is listening on: ", port );
})