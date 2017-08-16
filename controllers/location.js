const express = require("express");
const Location = require("../models/location");

const router = express.Router();

router.get("/", (req, res) => {
  Location.find().then((locations) => {
    res.json(locations);
  });
});

router.get("/:id", (req, res) => {
  console.log(req.params.id)
  Location.findById(req.params.id).then((location) => {
    res.json(location);
  });
});

router.post('/', (req,res) => {
  const newLocation = new Location();
  console.log(req.body);
  newLocation.place = req.body.location.place;

  newLocation.save().then((location) => {
    res.json(location);
  }).catch(err => console.log(err));
});

module.exports = router;