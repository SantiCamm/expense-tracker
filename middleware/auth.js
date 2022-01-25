const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

const auth = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return next(
      res.status(404).json({ message: "Not authorized to access this route" })
    );
  }
  try {
    let decodedData = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ id: decodedData.id });
    
    if (!user) {
      return next(
        res.status(404).json({ message: "User not found with that ID" })
      );
    }

    req.userId = decodedData?.id;
    next();
  } catch (error) {
    return next(
      res.status(401).json({ message: "Not authorized to access this route" })
    );
  }
};

module.exports = auth;
