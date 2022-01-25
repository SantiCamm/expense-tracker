const express = require("express");
const router = express.Router();


const { googleLogin } = require("../controllers/users");

router
  .post("/auth", googleLogin);

module.exports = router;
