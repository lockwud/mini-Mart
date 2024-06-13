const argon2 = require("argon2")
const customError = require("../utils/customErrror");
const httpstatus = require("../utils/httpstatus");
const { signToken } = require("../utils/token");


const {
    addUser, 
    getUser,
    getUserById,
    updateUser,
    deleteUser,
    
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

exports.listUsers = async(req,res,next)=>{
    try{
        const user = await getUser()
        res.status(httpstatus.OK).json({user})
    }catch(error){
        console.log(error)
        next(new customError(500, error));

    }
};

exports.getUserById = async(req,res,next)=>{
    try{
        const user = await getUserById(req.params.id)
        res.status(httpstatus.OK).json({user})
    }catch(error){
        console.log(error)
        next(new customError(500, error));
    }
};

exports.updateUser = async(req,res,next)=>{
    try{
        const id = req.params
        const data = req.body
        const user = await updateUser(id, data)
        res.status(httpstatus.OK).json({user})
    }catch(error){
        console.log(error)
        next(new customError(500, error));
    }
};

exports.deleteUser = async(req,res,next)=>{
    try{
        const id = req.params
        const user = await deleteUser(id)
        res.status(httpstatus.OK).json({user})
    }catch(error){
        console.log(error)
        next(new customError(500, error));
    }
};