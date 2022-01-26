const { OAuth2Client } = require("google-auth-library");
const User = require("../models/User");

exports.googleLogin = async (req, res, next) => {
  // Get req body data
  const { token : googleToken } = req.body;
  const client = new OAuth2Client(process.env.CLIENT_ID);
  if (!googleToken) {
    return res.status(500).json({ message: "No token provided" });
  }

  try {
    // Verify token against OAuth2 client
    const ticket = await client.verifyIdToken({
      idToken: googleToken,
      audience: process.env.CLIENT_ID,
    });

    const decodedToken = ticket.getPayload();
    const { sub, name, email, picture} = decodedToken;

    let googleUser = await User.findOne({ email });

    // If the user doesn't exist, we create it
    if (!googleUser) {
        googleUser = await User.create({
            id: sub,
            name,
            email,
        });
    }

    //const token = googleUser.getSignedToken();
    
    return res.status(200).json({ result: {sub, picture}, googleToken });
  } catch (error) {
    return res.status(500).json({message: "Auth failed"})
  }
};
