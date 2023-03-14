// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine","ejs");

app.get("/", function(req,res){

    var today = new Date();
    var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    res.render("list", {kindOfDay: day[today.getDay()]});
});

app.listen(3000,function(){
    console.log("The server is running on port 3000");
});