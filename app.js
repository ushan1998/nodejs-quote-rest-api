const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app =  express();

//Calling the First Fetch
app.get('/',(req, res) =>{
  res.send("Hellow world !!")
})

// Calling the About
app.get('/about' ,(req,res) =>{
  res.send("Hellow, About !!")
})

// Start the Server
app.listen(3000, console.log("Listening on the port 3000 !"))
