"use strict";

const express = require("express");
const router = express.Router();

const Course = require("../models/course")
const Review = require("../models/review")


router.get("/", function (req, res, next) {
  Course
    .find()
    .select("_id, title")
    .exec(function(err, courses) {
      if (err) {
        return next(err)
      }
      return res.status(200).json({ courses })
    })
});


module.exports = router;

