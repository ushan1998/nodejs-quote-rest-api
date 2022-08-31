const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Create a Express App
const app =  express();

//Connect With the Database
mongoose.connect('mongodb+srv://nodejs-rest-api-quotes:Database@123@nodejs-quote-rest-api.bamibxj.mongodb.net/?retryWrites=true&w=majority',{
  useNewUrlParser:true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.once('open',() =>{
    console.log("Connect to the MongoDb");
} )


 // Middleware
app.use(bodyParser.json());


//Routes
app.get('/',(req, res) =>{
  res.send("Hellow world !!")
})


// Starting the Server
app.listen(3000, console.log("Listening on the port 3000 !"))
