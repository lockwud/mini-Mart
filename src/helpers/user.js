const prisma = require("../utils/prisma")

const addUser = async(data)=>{
    const user = await prisma.user.create(
        data
    )
    return user
};


module.exports = {
    addUser
}