const jwt = require('jsonwebtoken');
const {Unauthenticated} = require('../errors')

const verifyToken = async (req, res, next) =>{
    const authHeader = req.headers.authorization 
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new Unauthenticated('no token boi')
    }
    const token = authHeader.split(' ')[1]
 
    try{
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {username, img, role, id} = decoded;
        req.user = {username, img, role, id}
        next()
    }catch(err){
        throw new Unauthenticated('did not meet the height requirements lil bro...')
    }
}


module.exports = {verifyToken}