const House = require("./models/House");
const User = require("./models/User");
const { validationResult } = require("express-validator");

class HousesController {
  async addNewHouse(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Adding error (empty request)", errors });
      }

      const { houseName, email } = req.body;

     
      const user = await User.findOne({ email });



      if (!user) {
        return res.status(400).json({ message: "User doesn't exist!" });
      }

     
      const newHouse = new House(req.body);
      await newHouse.save();

      return res.json(newHouse);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Adding error" });
    }
  }

  async getAllHouses(req, res) {
    try {
      const houses = await House.find();
      res.json(houses);
    } catch (err) {
      console.log(err);
    }
  }

  async getHouseByName(req, res) {
    try {
      const house = await House.findOne({ houseName: req.params.houseName });
      if (!house) {
        return res.status(400).json({ message: "House is not found!" });
      }
      res.json(house);
    } catch (err) {
      console.log(err);
    }
  }

  async pushNewDate(req, res) {
    const id = req.params.id;

    const house = await House.findById(id);

    if (!house) {
      return res.status(400).json({ message: "House is not found!" });
    }

    if (!house.dates.includes(id)) {
      house.dates.push(id);
    }

    await house.save();
    res.json(house);
  }
}

module.exports = new HousesController();
