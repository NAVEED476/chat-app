const jwt = require("jsonwebtoken");

const GenerateJsonWebToken = (id) => {
  return jwt.sign({ id }, process.env.SEC_KEY, {
    expiresIn: "30d",
  });
};

module.exports = GenerateJsonWebToken;
