"use strict";

const mongoose = require("mongoose");
/**
 * The user modal
 */


const UserSchema = new mongoose.Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  avatar: {
    type: String
  },
  email: {
    type: String
  }
}, {
  timestamps: true
});
module.exports = mongoose.model("User", UserSchema);
//# sourceMappingURL=User.model.js.map