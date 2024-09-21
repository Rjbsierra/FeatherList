const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const {connectDB} = require('./server/db')
const path = require('path')



// APP CONFIG
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:4200',
    allowedHeaders: ['Authorization', 'Content-Type']
}))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

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