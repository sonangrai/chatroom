import mongoose from "mongoose";

export interface Imessage extends mongoose.Document {
  user: object;
  message: string;
}

/**
 * Message Modal
 */
const messageSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<Imessage>("Message", messageSchema);
