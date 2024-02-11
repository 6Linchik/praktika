const Dates = require("./models/Dates");
const { validationResult } = require("express-validator");

class DatesController {
  async addNewDate(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Adding error (empty request)", errors });
      }

      const newDate = new Dates(req.body);
      await newDate.save();

      return res.json(newDate);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Adding error" });
    }
  }
}

module.exports = new DatesController();
