const user = require('../controllers/user-cont')
const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const userMiddleware = require('../middleware/users')

router.route('/').post(userMiddleware.upload.single('img'),user.addUser)

router.route('/:id').get(auth.verifyToken ,user.getAccount)

router.route('/login').post(user.validateUser)


module.exports = router;