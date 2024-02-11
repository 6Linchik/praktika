const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const User = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  houses: [{ type: mongoose.Schema.Types.ObjectId, ref: "House" }],
});

module.exports = model("User", User);
