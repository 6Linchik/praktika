const Router = require("express");
const router = new Router();
const controller = require("./datesController.js");

router.post("/", controller.addNewDate);

module.exports = router;
