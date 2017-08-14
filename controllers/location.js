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

router.post('/location', (req,res) => {
    Location.create(req.body).then((location => {
      res.send(location);
    }));
});


module.exports = router;