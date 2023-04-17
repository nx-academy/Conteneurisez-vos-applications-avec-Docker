"use strict";

const express = require("express");
const router = express.Router();

const Course = require("../models/course");
const Review = require("../models/review");

router.get("/", function (req, res, next) {
  Course.find()
    .select("_id, title")
    .exec(function (err, courses) {
      if (err) {
        return next(err);
      }
      return res.status(200).json({ courses });
    });
});

router.get("/:id", function(req, res, next) {
  Course
    .findById(req.params.courseId)
    .populate({
      path: 'user',
      model: 'User'
    })
    .populate({
      path: 'reviews',
      model: 'Review',
      populate: {
        path: 'user',
        model: 'User'
      }
    })
    .exec(function(err, course) {
      if (err) {
        res.status(404).json({
          response: 'Not found',
          error: err
        })
      } else {
        res.status(200).json({ course: course })
      }
    })
})

router.post('/', function(req, res, next) {
  const course = new Course(req.body)
  course.save(function(error) {
    if (error && error.name === "ValidationError") {

    } else if (error) {
      return next(error)
    } else {
      res.status(201).send()
    }
  })
})


module.exports = router;
