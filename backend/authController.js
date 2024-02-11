const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { secret } = require("./config");

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };

  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class AuthController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Registration error", errors });
      }

      const { email, password } = req.body;
      const candidate = await User.findOne({ email });
      if (candidate) {
        return res.status(400).json({ message: "User already exist!" });
      }

      const hashPassword = bcrypt.hashSync(password, 7);
      const user = new User({
        email,
        password: hashPassword,
      });
      await user.save();

      return res.json(user);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Registration error" });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User is not found!" });
      }

      const validPassword = bcrypt.compareSync(password, user.password);

      if (!validPassword) {
        return res.status(400).json({ message: "Wrong password!" });
      }

      // const token = generateAccessToken(user._id, user.roles);
      // return res.json({ token });
      return res.json(user);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Login error" });
    }
  }
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.log(err);
    }
  }

  async getUserByEmail(req, res) {
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      return res.status(400).json({ message: "User is not found!" });
    }

    res.json(user);
  }

  async pushNewHouse(req, res) {
    const { id } = req.body;
    console.log(req.body);
    const user = await User.findOne({ email: req.params.email });

    if (!user) {
      return res.status(400).json({ message: "User is not found!" });
    }

    if (!user.houses.includes(id)) {
      user.houses.push(id);
    }

    await user.save();
    res.json(user);
  }
}

module.exports = new AuthController();
