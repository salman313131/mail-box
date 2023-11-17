const jwt = require('jsonwebtoken')
function auth(req,res,next){
    const authHeader = req.headers['authorization']
    if(authHeader == null){
        return res.status(401).json({success:false})
    }
    const user = jwt.verify(authHeader,'secretkey')
    req.user = user
    next()
}
module.exports = auth