const express = require("express");
const mongoose = require("mongoose")

const DB_URL = process.env.ME_CONFIG_MONGODB_URL
const PORT = process.env.PORT || 3000;


const app = express();

mongoose.connect(DB_URL)
const db = mongoose.connection

db.on('error', function(err) {
  console.error('connection error', err);
});

db.on('connected', function() {
    console.log('MongoDB: successfully connected');
});

db.on('disconnected', function() {
    console.log('MongoDB: disconnected');
});



app.use("/", function (req, res) {
  res.send("Hello, World!");
});


app.listen(PORT, function () {
  console.log(`Project is running on http://localhost:${PORT}`);
});
