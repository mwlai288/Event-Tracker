const express = require("express");
const Location = require("../models/location");

const router = express.Router();

router.get("/", (req, res) => {
  Location.find().then((locations) => {
    res.json(locations);
  });
});

router.get("/:id", (req, res) => {
  Location.findById(req.params.id).then((location) => {
    res.json(location);
  });
});

module.exports = router;