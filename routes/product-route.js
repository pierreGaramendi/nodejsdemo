const express = require("express");
const router = express.Router();
//const customerListHandler = require("../../controllers/customer-controller-squalize");
const customerListHandler = require("../controllers/customer/customer-controller-squalize");

customerByIdHandler = (request, response, next) => {
  const id = request.params.id;
  response.status(200).json({});
};
customerCreatedHandler = (request, response, next) => {
  response.status(200).json({});
};
customerUpdatedHandler = (request, response, next) => {
  response.status(200).json({});
};
customerDeletedHandler = (request, response, next) => {
  response.status(200).json({});
};

router.get("/", customerListHandler);
router.get("/:id", customerByIdHandler);
router.post("/", customerCreatedHandler);
router.patch("/:id", customerUpdatedHandler);
router.delete("/:id", customerDeletedHandler);

module.exports = router;
