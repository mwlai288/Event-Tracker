const express = require("express");
const Location = require("../models/user");

const router = express.Router();

router.get("/", (req, res) => {
  User.find().then((users) => {
    res.json(users);
  });
});

router.get("/:id", (req, res) => {
  console.log(req.params.id)
  User.findById(req.params.id).then((user) => {
    res.json(user);
  });
});

router.put('/user', (req,res) => {
  User.create(req.body).then((user => {
    res.send(user);
  }));
});


module.exports = router;