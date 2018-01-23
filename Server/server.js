"use strict"
const express = require("express");
const mongoose = require("mongoose");

//'mongodb://127.0.0.1:27017/Confessionsdatabase'

var db = mongoose.connection.openUri('mongodb://127.0.0.1:27017/AnonyChat');


mongoose.connection.once('connected',function(){
  console.log("Connected to database");
});


const port=process.env.PORT || 8080;

require("./Routes")(db);
