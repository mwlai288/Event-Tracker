const express = require("express");
const Event = require("../models/event");

const router = express.Router();


// Show Event
router.get("/", (req, res) => {
  Event.find().then((events) => {
    res.json(events);
  });
});

router.get("/:id", (req, res) => {
  console.log(req.params.id)
  Event.findById(req.params.id).then((event) => {
  res.json(event);
  });
});

// Post New Event
router.post('/', (req,res) => {
  const newEvent = new Event();
  console.log(req.body);
  newEvent.name = req.body.events.name;
  // newEvent.venue = req.body.events.venue;
  // newEvent.date = req.body.events.date;

  newEvent.save().then((events) => {
    res.json(events);
  }).catch(err => console.log(err));
});

// Delete Location
router.get('/:locationId/delete', (req,res) =>{
  const locationId = req.params.locationId;
  Location.findById(locationId).then((location)=>{
    const foundUser = location.users.find((place) => {
      return place.id === placeId
    });
    const foundLocation = foundUser.place.find((location) => {
      return place.id === locationId;
    });
    foundUser.location.remove(foundUser);
    location.save();
    res.redirect(`/${locationId}`);
  }).catch((error)=>{
    console.log(error);
  })
});

// Update Location
router.put('/:location', (req, res) => {
  const locationId = req.params.battleId;
  console.log(locationId);
  Location.findById(locationId).then((location) => {
    const foundLocation = location.place.find((location) => {
      return place.id === placeId;
    });
    foundLocation.place = req.body.place;
    location.save();
    console.log('SUCCESS');
    });
    }).catch((error) => {
    console.log(error);
    });




module.exports = router;