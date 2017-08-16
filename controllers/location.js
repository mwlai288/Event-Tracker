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