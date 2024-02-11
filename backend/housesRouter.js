const Router = require("express");
const router = new Router();
const controller = require("./housesController");

router.post("/:houseName", controller.addNewHouse);
router.patch("/pushNewDate/:id", controller.pushNewDate);
router.get("/:houseName", controller.getHouseByName);
router.get("/all", controller.getAllHouses);

module.exports = router;
