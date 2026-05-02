const {DataTypes}=require('sequelize')
const sequelize=require('../utils/dbconnect')

const Users=sequelize.define('users',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    userName:{
            type:DataTypes.STRING ,
        allowNull:false
    },
    email:{
           type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
     
    }
   
})
module.exports=Users;