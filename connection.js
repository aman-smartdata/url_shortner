const mongoose = require("mongoose");
const url =
  "mongodb+srv://amansmartdata40:7tvfipPbkSVRM4xz@cluster0.y5pow.mongodb.net/ace_monogo";

async function connectDb() {
  return await mongoose.connect(url);
}

module.exports = {
  connectDb: connectDb,
};
