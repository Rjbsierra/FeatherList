const user = require('../controllers/user-cont')
const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')


router.route('/').post(user.addUser)

router.route('/:id').get(user.getAccount)

router.route('/login').post(user.validateUser)


module.exports = router;