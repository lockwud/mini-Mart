const argon2 = require("argon2");
const customError = require("../utils/customErrror");
const httpstatus = require("../utils/httpstatus");
const { signToken } = require("../utils/token");


const {
    addUser, 
    getUser,
    getUserById,
    updateUser,
    deleteUser,
    login
    
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

exports.signIn = async(req,res,next)=>{
    const {email, password}= req.body
    const user = await login(email);
    if(!user){
        res.status(httpstatus.UNAUTHORIZED).json({message:"No email found for this user"})

    }
    else{
        const isPassword = await argon2.verify(user.password,password)
        if(!isPassword){
            res.status(httpstatus.UNAUTHORIZED).json({message:"Invalid password"})
        }else{
            delete user.password;
        const token = signToken(user.id);
        res.status(httpstatus.OK).json({
          message: "User succesfully logged in !",
          username: user.username,
          email: user.email,
          token,
          id: user.id,
        });
        }
    }
};