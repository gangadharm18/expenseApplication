const express=require('express');
const router=express.Router();
const expenseController=require('../controller/expenseController')


router.post('/addexpense',expenseController.addExpense)
router.get('/expense',expenseController.getall)
router.delete('/:id',expenseController.deleterow)

module.exports=router;