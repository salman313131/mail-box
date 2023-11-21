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
exports.getSingleMail = async (req,res,next)=>{
    const id = req.params.id;
    console.log(id)
    try {
        const current = await Mail.findById(id).populate('sender_user_id',['email'])
        if(!current){
            return res.status(404).json({message:'not found'})
        }
        if(!current.isRead){
            await Mail.findByIdAndUpdate(id,{isRead:true})
        }
        res.status(200).json({current:current})
    } catch (error) {
        res.status(500).json({message:'server side error'})
    }
}
exports.deleteMail= async (req,res,next)=>{
    const id = req.params.id
    try {
        await Mail.findByIdAndDelete(id)
        res.status(204).json({message:'deleted successfully'})
    } catch (error) {
        res.status(500).json({message:'server side error'})
    }
}
exports.getSentMail = async (req,res,next)=>{
    try {
        const sentMail = await Mail.find({sender_user_id:req.user.userId})
        res.status(200).json({data:sentMail})
    } catch (error) {
        res.status(500).json({message:'server side error'})
    }
}