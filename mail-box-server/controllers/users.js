const User = require('../modal/users')
const bcrypt = require('bcrypt')

exports.addUser = async (req,res,next)=>{
    const {email,password} = req.body
    try{
        const user = await User.findOne({email:email})
        if(user){
            return res.status(409).json({message:'user already exists'})
        }
        const salt = 10
        const hashedPassword = await bcrypt(password,salt)
        const newUser = new User({email:email,password:hashedPassword})
        await newUser.save()
        res.status(201).json({success:true})
    }catch{
        res.status(500).json({message:'server side error'})
    }
}