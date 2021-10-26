import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;
const host = "localhost";

app.listen(3000, () => {
  console.log(`Server Running at http://${host}:${port}`);
});
