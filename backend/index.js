const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./authRouter");
const housesRouter = require("./housesRouter");
const datesRouter = require("./datesRouter");
const PORT = process.env.PORT || 5050;

const app = express();
app.use(express.json());
app.use("/auth", authRouter);
app.use("/house", housesRouter);
app.use("/dates", datesRouter);
app.use(cors());

const start = () => {
  try {
    app.listen(PORT, async () => {
      await mongoose.connect(
        "mongodb+srv://alinochkabashtova:TslUnISppnHIACna@cluster0.unrcw0s.mongodb.net/?retryWrites=true&w=majority"
      );

      console.log(`\nServer started on port ${PORT}\n`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
