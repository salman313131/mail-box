const User = require('../modal/users')
const Mail = require('../modal/mail')

exports.postMail = async (req,res,next)=>{
    const { email, subject, body } = req.body
    try{
        const receiver = await User.findOne({email:email})
        const mail = new Mail({sender_user_id:req.user.userId,recipient_user_id:receiver._id,subject:subject,body:body})
        await mail.save()
        res.status(201).json({message:'send successfully'})
    }catch(err){
        res.status(500).json({message:'server error',error:err})
    }
}

exports.getMail = async (req,res,next)=>{
    try {
        const receivedMail = await Mail.find({recipient_user_id:req.user.userId})
        res.status(200).json({data:receivedMail})
    } catch (error) {
        res.status(500).json({message:'server side error'})
    }
}