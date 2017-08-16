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






module.exports = router;