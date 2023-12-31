const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
const cors = require('cors')

//cors config
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};


//router
const userRouter = require('./routers/users')
const mailRouetr = require('./routers/mail')

//config
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

//api
app.use('/api/v1',userRouter)
app.use('/api/v1',mailRouetr)

mongoose.connect('mongodb+srv://jaan:jaankhan786@nodereact.mu2wjrq.mongodb.net/MailBox?retryWrites=true&w=majority')
.then(()=>{
    app.listen(3000)
}).catch(err=>console.log(err))