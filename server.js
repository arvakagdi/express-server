const express = require("express");
const app = express();

//get() allows us to specify what happens when a 
//browser gets in touch with our server and makes a get request
// "/" represents root of our webiste(our homepage)

 app.get("/", function(req,res){
    res.send("<h1>Hello World</h1>")
 })   

 app.get("/contact", function(req,res){
     res.send("contact me at 315777777");
 })
 app.get("/about", function(req,res){
    res.send("I am a sofware developer!!");
 })
 app.get("/hobbies", function(req,res){
    res.send("Code, Paint, Sleep!!");
 })

 app.listen(3000,function(){
    console.log("Server started on port 3000");
});