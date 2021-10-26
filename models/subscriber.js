import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  userChannel: {
    type: String,
    required: true,
  },
  userDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export default mongoose.model("Subscriber", subscriberSchema);
