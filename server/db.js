const mongoose = require('mongoose')

const connectDB = (url) =>{
    mongoose.connect(url)
    .then(
        console.log('conencted to DB'))
    .catch = (err) => {
        console.log(err)
    }
}

module.exports = {connectDB};