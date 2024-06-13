const argon2 = require("argon2")

const {
    addUser
} = require("./helpers/user")

exports.signUp = async(req,res,next)=>{
    try{
        const data = req.body
        data.password = await argon2.hash(password)
        const user = await addUser(data)
    }catch(error){
        console.log(error)
    }
};