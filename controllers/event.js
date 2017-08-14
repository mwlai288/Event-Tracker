const express = require("express");
const Event = require("../models/event");

const router = express.Router();

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

// router.post('/', (req,res) => {
//   const newEvent = new Event();
//   console.log(req.body);
//   newEvent
// })

module.exports = router;