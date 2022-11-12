import mongoose from "mongoose";

export interface Iuser extends mongoose.Document {
  firstname: string;
  lastname: string;
  avatar: string;
  email: string;
}

/**
 * The user modal
 */
const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    avatar: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<Iuser>("User", UserSchema);
