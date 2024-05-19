const express = require("express");
const app = express();
const eventRoute = require("../routes/event-route");

app.get("/", (request, response) => {
  response.send({ title: "Kalendar App" });
});

app.use("/event", eventRoute);

app.use(express.json());

module.exports = app;
