const User = require("../modal/User.modal");

//A response object
let responseObj = {
  msg: this.msg,
  data: this.data,
  status: this.status,
};

/**
 * Saving user to mongodb
 */
exports.saveUser = async (req, res) => {
  const { fname, lname, email, avatar } = req.body;

  let userObj = new User({
    fname: fname,
    lname: lname,
    email: email,
    avatar: avatar,
  });

  try {
    await userObj.save();

    //Creating success object
    responseObj.msg = "User added successfully";
    responseObj.data = userObj;
    responseObj.status = 201;

    //Emiting the event of success user added
    req.io.emit("user-created", responseObj);
    res.send(responseObj);
  } catch (error) {
    //Creating success object
    responseObj.msg = "User adding failed";
    responseObj.data = userObj;
    responseObj.status = 500;
    res.send(responseObj);
  }
};
