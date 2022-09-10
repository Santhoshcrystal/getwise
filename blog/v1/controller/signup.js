const User = require("../model/user");
const { v4: uuidv4 } = require('uuid');

const { loginSecret } = require("../../../config/jwtConfig");
const { createUserJWT, hashPassword } = require("../../../helpers/authHelper");

const { Success } = require("../../../helpers/response/Success");
const {
  UnprocessabelEnitity,
  BadRequest,
} = require("../../../helpers/response/ClientErrors");
const { sendMail } = require("../../../helpers/verificationmail");

module.exports.createAccount = async (req, res) => {
  const userData = ({ firstName, email, password } = req.body);

  const userExists = await User.findOne({ email: userData.email });

  if (userExists)
    return Conflict(res, "User with the same email already exist");

  userData.password = hashPassword(userData.password);

  const { error, data } = await promiseHandler(User.create(userData));

  await sendMail(email, uuidv4())
  if (error) return BadRequest(res, "Error In Creating Account");
};
