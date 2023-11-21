const express = require('express')
const router = express.Router()
const mail = require('../controllers/mail')
const auth = require('../middleware/auth')

router.post('/mail',auth,mail.postMail)
router.get('/getmail',auth,mail.getMail)
router.get('/getmail/:id',mail.getSingleMail)
router.get('/sentmail',auth,mail.getSentMail)
router.delete('/deletemail/:id',auth,mail.deleteMail)

module.exports = router