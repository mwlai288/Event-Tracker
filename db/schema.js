const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    name: String,
    venue: String,
    date: Date
});

const LocationSchema = mongoose.Schema({
    place: String, 
    // id: Number,
    events: [EventSchema]
});

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    favoriteEvent: [EventSchema]
});

UserSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
      this.created_at = now;
    }
    next();
  });

const Location = mongoose.model('Location', LocationSchema);
const Event = mongoose.model('Event', EventSchema);
const User = mongoose.model('User', UserSchema);

module.exports = {
    Location, Event, User
};