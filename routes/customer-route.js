const express = require("express");
const router = express.Router();
const customerCreated = require("../mock/customer-created");
const customer = require("../mock/customer-by-id");
const customerUpdated = require("../mock/customer-updated");
const customerDeleted = require("../mock/customer-deleted");


const getAllCustomersPrisma = require("../controllers/customer/customer-controller-fs")

customerByIdHandler = (request, response, next) => {
  const id = request.params.id;
  if (id == 2) {
    response.status(200).json(customer);
  } else {
    response.status(400).json({});
  }
};
customerCreatedHandler = (request, response, next) => {
  response.status(200).json(customerCreated);
};
customerUpdatedHandler = (request, response, next) => {
  response.status(200).json(customerUpdated);
};
customerDeletedHandler = (request, response, next) => {
  response.status(200).json(customerDeleted);
};


router.get("/", getAllCustomersPrisma);
router.get("/:id", customerByIdHandler);
router.post("/", customerCreatedHandler);
router.patch("/:id", customerUpdatedHandler);
router.delete("/:id", customerDeletedHandler);

module.exports = router;
