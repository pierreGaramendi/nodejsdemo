const express = require("express");
const app = express();

const customerRoute = require("./routes/customer-route");
const productRoute = require("./routes/product-route");

app.get("/", (request, response) => {
  response.send({ title: "hellloooo" });
});

app.use("/customer", customerRoute);
app.use("/product", productRoute);

module.exports = app;
