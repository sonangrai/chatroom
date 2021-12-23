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

  try {
    await msgObj.save();

    //Creating success object
    responseObj.msg = "Message added successfully";
    responseObj.data = msgObj;
    responseObj.status = 201;

    //Emiting the event of success user added
    req.io.emit("message-saved", responseObj);
    res.send(responseObj);
  } catch (error) {
    //Creating success object
    responseObj.msg = "Message adding failed";
    responseObj.data = msgObj;
    responseObj.status = 500;
    res.send(responseObj);
  }
};
