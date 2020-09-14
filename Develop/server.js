// Dependencies 

var express = require("express");
var path = require("path");
//--------------------------------

var app = express();
var PORT = 8080;

// Set up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });