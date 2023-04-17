'use strict'

const mongoose = require('mongoose')

const User = require('./user')
const Review = require('./review')

const CourseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: [true, "A course must have a title"]
  },
  description: {
    type: String,
    required: [true, "A course must have a description"]
  },
  estimatedTime: {
    type: String
  },
  materialsNeeded: {
    type: String
  },
  steps: [{
    stepNumber: Number,
    title: {
      type: String,
      required: [true, "Step title is required"]
    },
    description: {
      type: String,
      required: [true, "Step description is required"]
    }
  }],
  reviews: [{
    type: mongoose.Schema.ObjectId,
    ref: "Review"
  }]
})

const Course = mongoose.model("Course", CourseSchema)
module.exports = Course

