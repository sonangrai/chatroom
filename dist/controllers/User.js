"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveUser = void 0;

var _User = _interopRequireDefault(require("../model/User.model"));

var _response = _interopRequireDefault(require("../utils/response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Saving user to mongodb
 */
const saveUser = async (req, res) => {
  const {
    fname,
    lname,
    email,
    avatar
  } = req.body;
  let userObj = new _User.default({
    firstname: fname,
    lastname: lname,
    email: email,
    avatar: avatar
  });

  try {
    //Finding if they exist already
    let userInDb = await _User.default.findOne({
      email: email
    });

    if (userInDb) {
      //Creating success object
      let successObj = new _response.default("User login successfully", userInDb, 201);
      res.send(successObj);
    } else {
      await userObj.save(); //Creating success object

      let successObj = new _response.default("User added successfully", userInDb, 201);
      res.send(successObj);
    }
  } catch (error) {
    //Creating success object
    let failedObj = new _response.default("User adding failed", userInDb, 500);
    res.send(failedObj);
  }
};

exports.saveUser = saveUser;
//# sourceMappingURL=User.js.map