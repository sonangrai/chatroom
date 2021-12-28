import User from "../model/User.model";
import responseObj from "../utils/response";

/**
 * Saving user to mongodb
 */
export const saveUser = async (req, res) => {
  const { fname, lname, email, avatar } = req.body;

  let userObj = new User({
    firstname: fname,
    lastname: lname,
    email: email,
    avatar: avatar,
  });

  try {
    //Finding if they exist already
    let userInDb = await User.findOne({ email: email });
    if (userInDb) {
      //Creating success object
      let successObj = new responseObj(
        "User login successfully",
        userInDb,
        201
      );
      res.send(successObj);
    } else {
      await userObj.save();

      //Creating success object
      let successObj = new responseObj(
        "User added successfully",
        userInDb,
        201
      );
      res.send(successObj);
    }
  } catch (error) {
    //Creating success object
    let failedObj = new responseObj("User adding failed", userInDb, 500);
    res.send(failedObj);
  }
};
