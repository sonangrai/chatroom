import User from "../model/User.model";
import Message from "../model/Message.model";
import responseObj from "../utils/response";

/**
 * Save message controller
 * @param {*} req
 * @param {*} res
 */
export const saveMsg = async (req, res) => {
  const { userId, message } = req.body;

  let msgObj = new Message({
    user: userId,
    message: message,
  });

  try {
    //Getting User Info
    let userInfo = await User.findById(userId);

    if (!userInfo) {
      //Creating success object
      let notfoundObj = new responseObj("User not found", msgObj, 500);
      return res.send(notfoundObj);
    }

    try {
      await msgObj.save();

      //Creating new object with user info
      let newObject = {
        userInfo,
        message: message,
      };

      //Creating success object
      let successObj = new responseObj(
        "Message added successfully",
        newObject,
        201
      );
      res.io.sockets.emit("message-sent", successObj);
      return res.send(successObj);
    } catch (error) {
      //Creating success object
      let failedObj = new responseObj("Message adding failed", msgObj, 500);
      return res.send(responseObj);
    }
  } catch (error) {
    //Creating success object
    let failedObj = new responseObj("Message adding failed", msgObj, 500);
    return res.send(responseObj);
  }
};

/**
 * Get all messages
 * @param {*} req
 * @param {*} res
 */
export const getMsg = async (req, res) => {
  try {
    let messages = await Message.find().sort({ createdAt: "ascending" });
    //REsponse object
    let messagesObj = new responseObj("Messages retrieved", messages, 200);
    return res.send(messagesObj);
  } catch (error) {
    let errorObj = new responseObj("Error Occured", error, 500);
    return res.send(errorObj);
  }
};
