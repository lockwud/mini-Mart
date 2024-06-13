const prisma = require("../utils/prisma")
const addUser = async (data) => {
  const user = await prisma.user.create({
    data: {
      username: data.username,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
    },
  });
  return user;
};

module.exports = {
  addUser,
};