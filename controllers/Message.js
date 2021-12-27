const User = require("../model/User.model");
const Message = require("../model/Message.model");
const { responseObj } = require("../utils/response");

/**
 * Save message controller
 * @param {*} req
 * @param {*} res
 */
exports.saveMsg = async (req, res) => {
  const { userId, message } = req.body;

  let msgObj = new Message({
    user: userId,
    message: message,
  });

  //Getting User Info
  let userInfo = await User.findById(userId);

  try {
    await msgObj.save();

    //Creating new object with user info
    let newObject = {
      userInfo,
      message: message,
    };

    //Creating success object
    responseObj.msg = "Message added successfully";
    responseObj.data = newObject;
    responseObj.status = 201;
    res.io.sockets.emit("message-sent", responseObj);
    res.send(responseObj);
  } catch (error) {
    //Creating success object
    responseObj.msg = "Message adding failed";
    responseObj.data = msgObj;
    responseObj.status = 500;
    res.send(responseObj);
  }
};
