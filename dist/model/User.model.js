"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The user modal
 */
const UserSchema = new _mongoose.default.Schema({
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
module.exports = _mongoose.default.model("User", UserSchema);
//# sourceMappingURL=User.model.js.map