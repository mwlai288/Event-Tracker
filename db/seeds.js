require("dotenv").config();
var mongoose = require('mongoose');
var moment = require('moment');
mongoose.connect(process.env.MONGODB_URI);

var Location = require('../models/location');
var Event = require('../models/event');
var User = require('../models/user');

// Use native promises
mongoose.Promise = global.Promise;

Location.remove({}, (err) => console.log(err));
Event.remove({}, (err) => console.log(err));
User.remove({}, (err) => console.log(err));

// Create new Locations

const atlanta = new Location ({
    place: "Atlanta, GA",
});

const charleston = new Location ({
    place: "Charleston, SC",
});

const orlando = new Location ({
    place: "Orlando, FL",
});

// Create new Events

const convention = new Event ({
    name: "DragonCon",
    venue: "Hyatt Regency Atlanta",
    // description: "Largest multi-media, popular culture convention focusing on science fiction and fantasy, gaming, comics, literature, art, music, and film in the universe!",
    date: moment('09/01/2017', 'MM/DD/YYYY', true).format()    
});

const sport = new Event ({
    name: "Atlanta United vs. FC Dallas",
    venue: "Mercedes-Benz Stadium",
    // description: "MLS Soccer",
    date: moment('09/10/2017', 'MM/DD/YYYY', true).format()
});


// create new Users
const will = new User ({
    firstName: "Will",
    lastName: "Lai",
    favoriteEvent: [ ]
});

// save the Locations

atlanta.save(function(err) {
    if (err) console.log(err);
  
    console.log('atlanta created!');
  });

  charleston.save(function(err) {
    if (err) console.log(err);
  
    console.log('charleston created!');
  });
  
  orlando.save(function(err) {
    if (err) console.log(err);
  
    console.log('orlando created!');
  });

  // save the Events

  convention.save(function(err) {
    if (err) console.log(err);
  
    console.log('convention created!');
  });
  
  sport.save(function(err) {
    if (err) console.log(err);
  
    console.log('sport created!');
  });


  // save the User

  will.save(function(err) {
    if (err) console.log(err);
  
    console.log('will created!');
  });

  mongoose.connection.close();