"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveMsg = void 0;

var _User = _interopRequireDefault(require("../model/User.model"));

var _Message = _interopRequireDefault(require("../model/Message.model"));

var _response = _interopRequireDefault(require("../utils/response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Save message controller
 * @param {*} req
 * @param {*} res
 */
const saveMsg = async (req, res) => {
  const {
    userId,
    message
  } = req.body;
  let msgObj = new _Message.default({
    user: userId,
    message: message
  });

  try {
    //Getting User Info
    let userInfo = await _User.default.findById(userId);

    if (!userInfo) {
      //Creating success object
      let notfoundObj = new _response.default("User not found", msgObj, 500);
      return res.send(notfoundObj);
    }

    try {
      await msgObj.save(); //Creating new object with user info

      let newObject = {
        userInfo,
        message: message
      }; //Creating success object

      let successObj = new _response.default("Message added successfully", newObject, 201);
      res.io.sockets.emit("message-sent", successObj);
      return res.send(successObj);
    } catch (error) {
      //Creating success object
      let failedObj = new _response.default("Message adding failed", msgObj, 500);
      return res.send(_response.default);
    }
  } catch (error) {
    //Creating success object
    let failedObj = new _response.default("Message adding failed", msgObj, 500);
    return res.send(_response.default);
  }
};

exports.saveMsg = saveMsg;
//# sourceMappingURL=Message.js.map