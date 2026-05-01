const {Sequelize}=require('sequelize')
const sequelize=new Sequelize('newexpensedb','root','0323',{
    host:'localhost',
    dialect:'mysql'
});
(async()=>{ try {
   await sequelize.authenticate();
   console.log("db connected")
} catch (error) {
    console.error(error.message);
}

})();
module.exports=sequelize;