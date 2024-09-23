const User = require('../model/user')

const jwt = require('jsonwebtoken');
const fs = require('fs');
const { console } = require('inspector');
const sharp = require('sharp');
const path = require('path');


// (WIP) creates a user
const addUser = async (req,res)=>{
    req.body.img = req.file.originalname

    const filename = req.file.originalname;
    const filePath = path.join('./uploads', filename);

    await sharp(req.file.buffer)
    .resize(300)
    .jpeg({quality: 30})
    .png({quality: 30})
    .toFile(filePath);

 
    res.status(201).json({mgs: req.file.buffer})
    await User.create(req.body).then((user) =>{
         res.status(201).json({user})
    }).catch((err)=>{
        console.log(`error encountered: ${err}`)
        res.status(500).json({msg: `Error creating user: ${err}`})
    })
}


//gets user from the token
const getUser = async (req,res) =>{
    if (req){
        res.status(200).json({user: req.user})
    }else{
        res.status(401).json({msg: 'No token provided'})
    }
}


//gets an account from the database
const getAccount = async (req,res) =>{
    console.log("here is the reqasdasd " +req.user)
    const {_id: userId} = req.user;
    await User.findById({_id: userId}).then((user) =>{
        user.img = `http://localhost:4000/uploads/${user.img}`
        res.status(200).json({user})
    }).catch((err) => {
            console.log('error encoutnered: ' + err)
            res.status(500).json({mgs: `Error retrieving user : ${err}`})
        })
}


//validates the user after login
const validateUser = async (req,res) =>{
    await User.findOne({username: req.body.username, password: req.body.password}).then((user) =>{
        user.img = `http://localhost:4000/uploads/${user.img}`
        const token = jwt.sign({username: user.username, role: user.role, id: user.id, img: user.img}, process.env.JWT_SECRET, {expiresIn: '30d'})
        res.status(200).json({msg: 'user logged in!',token})
    }).catch((err) =>{
        res.status(500).json({err})
    })
}


module.exports = {addUser, getAccount, validateUser, getUser}