const {validAuthKey} = require('./authKey')
function AuthMiddleware(req,res,next){
    const apiKey = req.headers.apiauthkey
    if(!apiKey){
        return res.status(401).json({error: 'Missing API Key'})
    }
    if(apiKey !== validAuthKey){
        return res.status(401).json({error: 'Failed to authenticate apiauthkey'})
    }
    next()
}
module.exports = AuthMiddleware
