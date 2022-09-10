const User = require('../model/user');

const { loginSecret } = require('../../../config/jwtConfig');
const { createUserJWT } = require('../../../helpers/authHelper');

const { Success } = require('../../../helpers/response/Success');
const { UnprocessabelEnitity, BadRequest } = require("../../../helpers/response/ClientErrors");
const { verifyPassword } = require('../../../helpers/authHelper');

module.exports.login = async (req, res) => {

    const { email, password } = req.body;

    let userExits = await User.findOne({email:email, userStatus: "inactive"});
    
    if (!userExits) return UnprocessabelEnitity(res, "User account not found");

    let validPassword = await verifyPassword(password, userExits.password)

    if(!validPassword) return BadRequest(res, "Invalid Email and Password")

    const jwttoken = createUserJWT(userExits);

    return Success(res, "Login successfull", { id: userExits._id, profilePic: userExits.profilePic, name: userExits.firstName, jT: jwttoken});
}