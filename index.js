const express = require("express");
const app = express();
const urlRoute = require("./routes/url.js");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/url", urlRoute);

module.exports = { app };
