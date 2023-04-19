const express = require('express')
const mongoose = require('mongoose')

const app = express()

const PORT = process.env.PORT || 3000
const DB_URL = process.env.ME_CONFIG_MONGODB_URL

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on("error", function (err) {
  console.error("connection error", err);
});

db.on("connected", function () {
  console.log("MongoDB: successfully connected");
});

db.on("disconnected", function () {
  console.log("MongoDB: disconnected");
});


app.get('/', (req, res) => {
  res.send("Hello, world!")
})


app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})

