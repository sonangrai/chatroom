const User = require("../modal/User.modal");

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
    res.send({
      msg: "User added successfully",
      data: userObj,
      status: 200,
    });
  } catch (error) {
    res.send({
      msg: "User addition failed",
      data: userObj,
      status: 500,
    });
  }
};
