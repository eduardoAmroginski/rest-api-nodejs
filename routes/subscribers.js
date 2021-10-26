import express from "express";
import subscriber from "../models/subscriber.js";
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

router.get("/:id", getSubscriber, (request, response) => {});

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

router.patch("/:id", getSubscriber, (request, response) => {});

router.put("/:id", getSubscriber, (request, response) => {});

router.delete("/:id", getSubscriber, (request, response) => {});

async function getSubscriber(request, response, next) {
  try {
    const subscriber = await Subscriber.findById(request.params.id);
    if (subscriber == null) {
      return response.status(404).json({ message: "Subscriber Not found!" });
    }
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }

  response.subscriber = subscriber;
  next();
}

export default router;
