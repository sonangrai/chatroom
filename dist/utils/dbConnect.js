"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("dotenv").config();
/**
 * Connecting to the mongo db
 */


const dbConnect = async () => {
  try {
    await _mongoose.default.connect(process.env.MONGO_URI);
    console.log("Database Connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

var _default = dbConnect;
exports.default = _default;
//# sourceMappingURL=dbConnect.js.map