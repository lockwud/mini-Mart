const argon2 = require("argon2");
const customError = require("../utils/customErrror");
const httpstatus = require("../utils/httpstatus");
const { signToken } = require("../utils/token");

const { addUser } = require("../helpers/user");

// exports.signUp = async (req, res, next) => {
//   try {
//     const data = req.body;
//     data.password = await argon2.hash(password);
//     const user = await addUser(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

exports.signUp = async (req, res, next) => {
  try {
    const data = req.body;
    if (!data.password) {
      throw new Error("Password is required");
    }
    data.password = await argon2.hash(data.password);
    const user = await addUser(data);
    delete user.password;
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
