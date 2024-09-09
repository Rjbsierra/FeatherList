const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const {connectDB} = require('./server/db')

// APP CONFIG
app.use(express.json())
app.use(cors())

//ROUTES
const {getRoutes} =  require('./server/routes/main')
getRoutes(app);


// STARTUP
const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
            app.listen(process.env.PORT, ()=>{
                console.log(`server listenisng to ${process.env.PORT}`)
            })
    }catch(err){
        console.log(err)
    }
}

start()