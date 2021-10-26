import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

mongoose.connect(process.env.DATABASE_STRING, {
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

app.use(express.json());

app.listen(3000, () => {
  console.log(`Server Running at http://${host}:${port}`);
});
