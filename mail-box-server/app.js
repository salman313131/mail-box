const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const mongoose = require('mongoose')

//router
const userRouter = require('./routers/users')
//config
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

//api
app.use('/api/v1',userRouter)

mongoose.connect('mongodb+srv://jaan:jaankhan786@nodereact.mu2wjrq.mongodb.net/MailBox?retryWrites=true&w=majority')
.then(()=>{
    app.listen(3000)
}).catch(err=>console.log(err))