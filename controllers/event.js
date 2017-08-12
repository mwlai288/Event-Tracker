const express = require("express");
const Event = require("../models/event");

const router = express.Router();

router.get("/", (req, res) => {
  Event.find().then((events) => {
    res.json(events);
  });
});

router.get("/:id", (req, res) => {
  Event.findById(req.params.id).then((event) => {
    res.json(event);
  });
});

module.exports = router;