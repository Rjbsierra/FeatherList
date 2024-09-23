const CustomError = require('./custom-error')
const {StatusCodes} = require('http-status-codes')

class EnumError extends CustomError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.UNPROCESSABLE_ENTITY
    }
}

module.exports = EnumError;