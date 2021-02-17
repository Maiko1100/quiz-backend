const express = require("express");
import * as bodyParser from "body-parser";
import initQuizController from "./controllers/QuizController";
import mongoose from "mongoose";
import cors from "cors";
import { getConnectionStringAndOption } from "./utils/getDatabaseConnectionSettings";

// var corsOptions = {
//   origin: "*",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   allowedHeaders:['cross-origin','content-type']
// };
const app = express();
// app.use(cors());
app.use(function(req:any, res:any, next:any) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json({ limit: "5mb" }));

initQuizController(app);

async function startServer() {
  try {
    const { connectionString, mongoOptions } = getConnectionStringAndOption();

    mongoose.connect(connectionString, mongoOptions);

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function () {});

    console.log("Successfully connected to the quiz database");
  } catch (err) {
    console.error(err);
  }

  app.listen("5000");
}
startServer();
