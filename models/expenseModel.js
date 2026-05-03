const {DataTypes}=require('sequelize')
const sequelize=require('../utils/dbconnect')

const Expenses=sequelize.define('expenses',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
  
    type:{
           type:DataTypes.STRING,
        allowNull:false
    },
    amount:{
        type:DataTypes.INTEGER,
        allowNull:false
     
    },
    category:{
         type:DataTypes.STRING,
        allowNull:false
    },
    description:{
         type:DataTypes.STRING,
        allowNull:false
     
    }
    
   
})
module.exports=Expenses;