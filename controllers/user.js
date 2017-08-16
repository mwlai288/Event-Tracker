const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/", (req, res) => {
  User.find().then((user) => {
    res.json(user);
  });
});

router.get("/:id", (req, res) => {
  console.log(req.params.id)
  User.findById(req.params.id).then((user) => {
    res.json(user);
  });
});

module.exports = router;