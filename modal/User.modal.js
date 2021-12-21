const mongose = reuire("mongoose");

/**
 * The user modal
 */
const UserSchema = new mongose.Schema(
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

module.exports = mongoose.model("User", UserSchema);
