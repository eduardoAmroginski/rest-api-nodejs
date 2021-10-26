import express from "express";
import Subscriber from "../models/subscriber.js";

const router = express.Router();

router.get("/", async (request, response) => {
  console.log("GET");
  try {
    const subscribers = await Subscriber.find();
    response.json(subscribers);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

router.get("/:id", getSubscriber, (request, response) => {
  response.json(response.subscriber);
});

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

router.patch("/:id", getSubscriber, async (request, response) => {
  if (request.body.userName != null) {
    response.subscriber.userName = request.body.userName;
  }

  if (request.body.userChannel != null) {
    response.subscriber.userChannel = request.body.userChannel;
  }

  try {
    const updateSubscriber = await response.subscriber.save();
    response.json(updateSubscriber);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
});

router.delete("/:id", getSubscriber, async (request, response) => {
  try {
    await response.subscriber.remove();
    response.json({ message: "Subscriber was deleted" });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

async function getSubscriber(request, response, next) {
  try {
    const subscriber = await Subscriber.findById(request.params.id);
    if (subscriber == null) {
      return response.status(404).json({ message: "Subscriber Not found!" });
    }
    response.subscriber = subscriber;
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
  next();
}

export default router;
