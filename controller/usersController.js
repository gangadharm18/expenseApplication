
const Users = require('../models/userModel')

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
        const user = await Users.create({
            userName,
            email,
            password
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
          
           if(user.password===password){
              res.status(200).json({ message: "Login successful" })
           }else{
             res.json({ message: "Invalid Password" })
             return
           }
          
           
        } else {
            res.json({ message: "invalid Email" })
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}


module.exports = {
    addUser,
    checkUser
}

 

   