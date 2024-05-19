const express = require("express");
const router = express.Router();

const getAllEventsController = require("../controllers/event/event-controller")

router.get("/", getAllEventsController);

module.exports = router;
