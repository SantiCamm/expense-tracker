const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  name: {
    type: String,
    unique: false,
    required: [true, "Please provide a valid name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide a valid email"],
  },
});

UserSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

/*UserSchema.pre("save", async (next) => {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
*/

module.exports = mongoose.model("User", UserSchema);
