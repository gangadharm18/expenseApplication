
const Users=require('../models/userModel')

const addUser=async(req,res)=>{
    try {
        const {userName,email,password}=req.body;
        const user=await Users.create({
            userName,
            email,
            password
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports={
    addUser
}