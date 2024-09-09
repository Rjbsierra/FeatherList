const user = require('../controllers/user-cont')
const express = require('express')
const router = express.Router();

router.route('/').post(user.addUser)


module.exports = router;