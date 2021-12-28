"use strict";

const mongoose = require("mongoose");
/**
 * Message Modal
 */


const messageSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  message: {
    type: String
  }
}, {
  timestamps: true
});
module.exports = mongoose.model("Message", messageSchema);
//# sourceMappingURL=Message.model.js.map