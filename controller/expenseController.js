const Expenses=require('../models/expenseModel')
const addExpense=async(req,res)=>{
    try {
        const {type,amount,category,description}=req.body;
        const expense=await Expenses.create({
           
            type,
            amount,
            category,
            description
        })
        res.status(201).json(expense)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


//get all expense
const getall=async(req,res)=>{
    try {
        const allexpense=await Expenses.findAll();
        res.json(allexpense);
    } catch (error) {
        res.status(500).json(error.message)
    }
}
//delete
const deleterow=async(req,res)=>{
    try {
        const id=req.params.id;
        const expense=await Expenses.findByPk(id);
        expense.destroy()
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}


module.exports={
    addExpense,
    getall,
    deleterow
}