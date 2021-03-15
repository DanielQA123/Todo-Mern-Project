const express = require('express');

//instantiate my app
const app = express();


//Requests 
app.get("/", (req, res) =>{
    res.send("hello world!");
})

app.get("/hello", (req, res) =>{
    res.send("This is my route");
})


//communicate with the app on a specific port 
app.listen(5019);


console.log("Hey Lets get started");