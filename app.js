const express = require("express");

const app = express();

app.use("/", function (req, res) {
  res.send("Hello, World!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Project is running on http://localhost:${PORT}`);
});
