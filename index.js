const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log("listening in port 3000");
});
