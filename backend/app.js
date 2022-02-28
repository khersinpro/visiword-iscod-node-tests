const express = require("express");
const wordRoutes = require("./routes/word.router");

const app = express();

app.use("/api/word", wordRoutes);

module.exports = app;
