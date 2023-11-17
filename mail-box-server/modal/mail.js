const mongoose = require('mongoose');

const Schema = mongoose.Schema

const mailSchema = new Schema({
  sender_user_id: {
    type: Schema.ObjectId,
    ref: 'user',
    required: true,
  },
  recipient_user_id: {
    type: Schema.ObjectId,
    ref: 'user',
    required: true,
  },
  subject: String,
  body: String,
  isRead:{
    type: Boolean,
    default :false
  }
});


module.exports = mongoose.model('mail', mailSchema);