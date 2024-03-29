const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
//const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      "Secret Pass Passphrase"
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    const email = await User.findOne({
      email: req.body.email,
    });
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      "Secret Pass Passphrase"
    );
      
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    const inputPassword = req.body.password;

    if (user || email) {
      originalPassword != inputPassword
        ? res.status(200).json("Wrong Password")
        : res.status(200).json(user);
    } else {
      res.status(401).json("Wrong User Name or Email");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
