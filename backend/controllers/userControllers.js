const User = require("../models/UserModel");

const AuthRoutes = require("express").Router();
const CryptoJs = require("crypto-js");

AuthRoutes.post("/register", async (req, res) => {
  const { name, email, password, pic } = req.body;
  const encryptedPassword = CryptoJs.AES.encrypt(password, process.env.SEC_PASS).toString(); // Convert the encrypted password to string

  try {
    const existingUser = await User.findOne({ email }); 
    if (existingUser) {
      res.status(400).json("User already exists"); 
    } else {
      const saveUser = new User({
        name,
        email,
        password: encryptedPassword, 
        pic,
      });
      const createNewUser = await saveUser.save();
      res.status(200).json(createNewUser);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = AuthRoutes;
