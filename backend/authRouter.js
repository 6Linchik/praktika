const Router = require("express");
const { check } = require("express-validator");
const router = new Router();
const controller = require("./authController");

router.post(
  "/registration",
  [
    check("email", "Email cannot be an empty string!").isEmail(),
    check("password", "Password must be more than 6 characters").isLength({
      min: 6,
    }),
  ],
  controller.registration
);
router.post("/login", controller.login);
router.patch("/pushNewHouse/:email", controller.pushNewHouse);
router.get("/users/:email", controller.getUserByEmail);
router.get("/users", controller.getUsers);

module.exports = router;
