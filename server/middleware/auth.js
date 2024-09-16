const jwt = require('jsonwebtoken');


const verifyToken = async (err, req, next) =>{
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new 'no token boi'
    }

    const token = authHeader.split(' ')[1]

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        next()
    }catch(err){
        throw new 'did not meet the height requirements lil bro...'
    }
}


module.exports = {verifyToken}