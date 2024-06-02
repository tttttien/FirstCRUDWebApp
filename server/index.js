const express = require('express')
const app = express()

app.use(express.json());

const db=require('./models')

//Routers
const postRouter=require('./routes/student')
app.use("/student",postRouter);

db.sequelize.sync().then(() =>{
app.listen(3001,()=>{
    console.log("Server running!")
});
});