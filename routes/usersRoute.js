
const express=require('express');
const router=express.Router();
const userController=require('../controller/usersController')

router.post('/',userController.addUser)
router.post('/login',userController.checkUser)


module.exports=router;