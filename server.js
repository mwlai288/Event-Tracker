require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const LocationController = require('./controllers/location');
const EventController = require('./controllers/event');
const app = express();

mongoose.Promise = global.Promise;

// Mongoose Connection
mongoose.connect(process.env.MONGODB_URI);
const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

connection.on('error', (err) => {  
  console.log('Mongoose default connection error: ' + err);
}); 

app.use(bodyParser.json());

app.use('/api/location/', LocationController);
app.use('/api/event', EventController);
app.get('/', (req,res) => {
  res.send('HELLO DUDE!')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Stuff Happened on " + PORT);
});