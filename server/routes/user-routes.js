const user = require('../controllers/user-cont')
const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const userMiddleware = require('../middleware/users')

router.route('/').post(userMiddleware.upload.single('img'),user.addUser)

router.route('/login').post(user.validateUser)

router.route('/myAccount').get(auth.verifyToken, user.getUser)

//static routes before your dynamic routes or just specify the dynamic ones if the same path segment numbers
router.route('/getAccount/:id').get(auth.verifyToken ,user.getAccount)

module.exports = router;