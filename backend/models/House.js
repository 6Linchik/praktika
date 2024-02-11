const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const House = new Schema({
  email: { type: String, required: true },
  houseName: { type: String, required: true, unique: false },
  roomArea: { type: Number, required: true },
  firstFloorArea: { type: Number, required: true },
  fundamentType: { type: String, required: true },
  basementArea: { type: Number, required: true },
  floorsAmount: { type: Number, required: true },
  construnctionYear: { type: Number, required: true },
  windowsArea: { type: Number, required: true },
  windowsGlassType: { type: String, required: true },
  windowsFrameType: { type: String, required: true },
  roofArea: { type: Number, required: true },
  roofType: { type: String, required: true },
  roofInsulationType: { type: String, required: true },
  outsideWallsLength: { type: Number, required: true },
  outsideWallsType: { type: String, required: true },
  outsideWallsInsulation: { type: String, required: true },
  cellingHeight: { type: Number, required: true },
  dates: [{ type: mongoose.Schema.Types.ObjectId, ref: "Dates" }],
});

module.exports = model("House", House);
