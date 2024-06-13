const argon2 = require("argon2")
const customError = require("../utils/customErrror");
const httpstatus = require("../utils/httpstatus");
const { signToken } = require("../utils/token");


const {
    addUser, 
    getUser
} = require("../helpers/user")

exports.signUp = async(req,res,next)=>{
    try{
        const data = req.body
        data.password = await argon2.hash(data.password)
        const user = await addUser(data)
        delete user.password
        res.status(httpstatus.OK).json({registered: "User registered successfully", user})
    }catch(error){
        console.log(error)
        next(new customError(500, error));
    }
};