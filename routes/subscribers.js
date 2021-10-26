import express from "express";
import Subscriber from "../models/subscriber.js";

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const subscribers = await Subscriber.find();
    response.json(subscribers);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

router.get("/:id", (request, response) => {});

router.post("/", async (request, response) => {
  const subscriber = new Subscriber({
    userName: request.body.userName,
    userChannel: request.body.userChannel,
  });

  try {
    const newSubscriber = await subscriber.save();
    response.status(201).json(newSubscriber);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
});

router.patch("/:id", (request, response) => {});

router.put("/:id", (request, response) => {});

router.delete("/:id", (request, response) => {});

export default router;
