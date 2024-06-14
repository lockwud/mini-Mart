const argon2 = require("argon2")
const httpstatus = require("../utils/httpstatus");
const prisma = require("../utils/prisma")

// const addUser = async(data)=>{
//     const user = await prisma.user.create({
//         data
//     })
//     return user
// };


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

const getUser = async(res)=>{
    const user = await prisma.user.findMany()
    return user
};

const getUserById = async(id)=>{
    const user = await prisma.user.findUnique({
        where:{
            id
        }
    })
    return user
};
const updateUser = async(id,data)=>{
    const user = await prisma.user.update({
        where:{
            id
        },
        data
    })
    return user
};

const deleteUser = async(id)=>{
    const user = await prisma.user.delete({
        where:{
            id
        }
    })
    return user
};
const login = async (email) => {
    const client = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        email: true,
        password: true,
      },
    });
    return client;
  };


module.exports = {
    addUser,
    getUser,
    getUserById,
    updateUser,
    deleteUser,
    login
}