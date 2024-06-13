const prisma = require("../utils/prisma")

const addUser = async(data)=>{
    const user = await prisma.user.create({
        data
    })
    return user
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
    const user = await prisma.user.delete(id)
}


module.exports = {
    addUser,
    getUser,
    getUserById,
    updateUser,
    deleteUser
}