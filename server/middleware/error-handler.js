const {CustomError} = require('../errors')
const {StatusCodes} = require('http-status-codes')

const errorHandler = (err, req, res, next) =>{
   
if(err instanceof CustomError) {
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something went wrong')
}

module.exports = errorHandler;