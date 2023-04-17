"use strict";

const express = require("express");
const idx = require("idx");

const router = express.Router();

const UserModel = require("../models/user");
const auth = require("../middlewares/auth")

router.get("/", function (req, res, next) {
  UserModel.find()
    .select("_id, username, email")
    .exec(function (error, users) {
      if (error) {
        return next(error);
      }
      res.status(200).json({ data: users });
    });
});


router.get("/:userId", auth, function(req, res, next) {
  User
    .findOne({ _id: req.userId })
    .select('-hashedPassword')
    .exec(function(err, user) {
      if (err) return next(err)
      res.status(200).json({ data: [user] })
    })
})


router.post("/", function (req, res, next) {
  const username = idx(req, (_) => _.body.username);
  const email = idx(req, (_) => _.body.email);
  const password = idx(req, (_) => _.body.password);

  if (username && email && password) {
    UserModel.create(
      {
        username,
        email,
        password,
      },
      function (error, user) {
        if (error) {
          console.log("Oh no", error);
          return next(error);
        } else {
          return res.status(201).send();
        }
      }
    );
  } else {
    res.status(403).json({
      error: "All fields are required",
    });
  }
});

module.exports = router;
