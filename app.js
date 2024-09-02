const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')


app.use(express.json())
app.use(cors())

app.get('/book',(req,res)=>{
    
    res.status(201).json({title:'Thelorax'})
    console.log('thebook')
})


app.listen(process.env.PORT, ()=>{
    console.log(`server listenisng to ${process.env.PORT}`)

})