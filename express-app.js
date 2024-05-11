const express = require("express");
const app = express();
const customerRoute = require("./customer-route");

app.get("/", (request, response) => {
  response.send({ title: "hellloooo" });
});

app.use("/customer", customerRoute);

module.exports = app;
