const {validAuthKey} = require('./authKey')
function AuthMiddleware(req,res,next){
    const apiKey = req.headers.apiauthkey
    if(!apiKey){
        return res.status(403).json({error: 'apiauthkey is missing or invalid'})
    }
    if(apiKey !== validAuthKey){
        return res.status(403).json({error: 'Failed to authenticate apiauthkey'})
    }
    next()
}
module.exports = AuthMiddleware
