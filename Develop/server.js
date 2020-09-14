// Dependencies 

var express = require("express");
var path = require("path");
//--------------------------------

var app = express();
var PORT = 8080;

// Set up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());