"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Message Modal
 */
const messageSchema = new _mongoose.default.Schema({
  user: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "user"
  },
  message: {
    type: String
  }
}, {
  timestamps: true
});
module.exports = _mongoose.default.model("Message", messageSchema);
//# sourceMappingURL=Message.model.js.map