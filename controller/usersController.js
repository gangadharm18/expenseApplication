
const Users = require('../models/userModel')
const bcrypt=require('bcrypt')

const addUser = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const exist = await Users.findOne({
            where: {
                email: email
            }
        })
        if (exist) {
            res.json({ message: "User already exist sign in here" })
            return;
        }
        const hashed=await bcrypt.hash(password,10);
        
        const user = await Users.create({
            userName,
            email,
            password:hashed
        })
        res.status(201).json({ message: "User created successfully", user })
    } catch (error) {
        res.status(500).json(error.message)
    }
}
//check email
const checkUser = async (req, res) => {
    try {
        const {email,password} = req.body;
       
        const user = await Users.findOne({
            where: {
                email: email,
                
            }
        });
      
        
        if (user) {
          const isMatch=await bcrypt.compare(password,user.password)
           if(isMatch){
              res.status(200).json({ message: " User login sucessful" })
           }else{
             res.status(401).json({ message: "(User not authorized" })
             return
           }
          
           
        } else {
            res.status(404).json({ message: "User not Found" })
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}


module.exports = {
    addUser,
    checkUser
}

 

   