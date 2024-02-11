const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const Dates = new Schema({
  month: { type: String, required: true },
  heatingType: { type: String, required: true },
  heaterPower: { type: Number, required: true },
  city: { type: String, required: true },
  kwAmount: { type: Number, required: true },
  temperature: { type: Number, required: true },
  kwPrice: { type: Number, required: true },
});

module.exports = model("Dates", Dates);
