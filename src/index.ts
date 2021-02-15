const express = require("express");
import * as bodyParser from "body-parser";
import initQuizController from "./controllers/QuizController";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json({ limit: "5mb" }));

initQuizController(app);

async function startServer() {
  try {
    mongoose.connect("mongodb://localhost/quizDb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function () {});

    console.log("Successfully connected to the quiz database");
  } catch (err) {
    console.error(err);
  }

  app.listen("3000");
}
startServer();
