const prisma = require("../utils/prisma")
const customError = require("../utils/customErrror")
exports.checkAvailability = async(req,res,next)=>{
    try{
        const {email} = req.body
        const user = await prisma.user.findUnique({
            where:{
                email
            }
        })
        if(user){
            res.status(400).json({message:"User already exists"})
        }else{
            next()
        }
    }catch(error){
        console.log(error)
        next(new customError, (500, error))
    }
}