import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;
const host = "localhost";

mongoose.connect("mongodb://localhost/subscribers", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.log("Database Error: " + err);
});

db.once("open", () => {
  console.log("Database Connected");
});

app.listen(3000, () => {
  console.log(`Server Running at http://${host}:${port}`);
});
