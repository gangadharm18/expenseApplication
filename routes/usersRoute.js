
const express=require('express');
const router=express.Router();
const userController=require('../controller/usersController')

router.post('/',userController.addUser)

module.exports=router;