const User = require('../model/user')
const UserService = require('../middleware/users')
const AuthService = require('../middleware/auth')
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { console } = require('inspector');


const addUser = async (req,res)=>{


    req.body.img = req.file.originalname
    await User.create(req.body).then((user) =>{
         res.status(201).json({user})

      
        

    }).catch((err)=>{
        console.log(`error encountered: ${err}`)
        res.status(500).json({msg: `Error creating user: ${err}`})
    })
}

const getAccount = async (req,res) =>{

        const {id: userId} = req.user.id;
        await User.findById({_id: userId}).then((user) =>{
            user.img = `http://localhost:4000/${user.img}`
            res.status(200).json({user})
        }).catch((err) => {
                console.log('error encoutnered: ' + err)
                res.status(500).json({mgs: `Error retrieving user : ${err}`})
            })
}

const validateUser = async (req,res) =>{
    await User.findOne({username: req.body.username, password: req.body.password}).then((user) =>{
        user.img = `http://localhost:4000/${user.img}`
        const token = jwt.sign({username: user.username, role: user.role, id: user.id, img: user.img}, process.env.JWT_SECRET, {expiresIn: '30d'})
        res.status(200).json({mgs: 'user logged in!',token})
    }).catch((err) =>{
        res.status(500).json({err})
    })
}


module.exports = {addUser, getAccount, validateUser}