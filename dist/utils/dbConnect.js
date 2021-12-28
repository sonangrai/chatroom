"use strict";

const mongoose = require("mongoose");

require("dotenv").config();
/**
 * Connecting to the mongo db
 */


const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = dbConnect;
//# sourceMappingURL=dbConnect.js.map