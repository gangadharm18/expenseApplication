const express=require('express');
const app=express();
const {Sequelize}=require('sequelize')
const cors=require('cors')
const path=require('path')

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
const db=require('./utils/dbconnect')
const userRoute=require('./routes/usersRoute')
const expenseRoute=require('./routes/expenseRoute')


db.sync({force:true}).then(()=>{
    app.listen(3000,()=>{
        console.log("server started")
    })
}).catch(err=>{
    console.error(err) 
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public','signup.html'))
});

app.use('/user',userRoute)
app.use('/expense',expenseRoute)

//for invalid url
app.use((req,res)=>{
    res.status(404).send("page not Found")
})
