"use strict";

const User = require("../model/User.model");

const {
  responseObj
} = require("../utils/response");
/**
 * Saving user to mongodb
 */


exports.saveUser = async (req, res) => {
  const {
    fname,
    lname,
    email,
    avatar
  } = req.body;
  let userObj = new User({
    firstname: fname,
    lastname: lname,
    email: email,
    avatar: avatar
  });

  try {
    //Finding if they exist already
    let userInDb = await User.findOne({
      email: email
    });

    if (userInDb) {
      //Creating success object
      responseObj.msg = "User login successfully";
      responseObj.data = userInDb;
      responseObj.status = 201;
      res.send(responseObj);
    } else {
      await userObj.save(); //Creating success object

      responseObj.msg = "User added successfully";
      responseObj.data = userObj;
      responseObj.status = 201;
      res.send(responseObj);
    }
  } catch (error) {
    //Creating success object
    responseObj.msg = "User adding failed";
    responseObj.data = userObj;
    responseObj.status = 500;
    res.send(responseObj);
  }
};
//# sourceMappingURL=User.js.map