const express = require('express')
const router = express.Router();
const list = require('../controllers/list-cont')
const comment = require('../controllers/comment-cont')
const listItem = require('../controllers/list-item-cont')
const auth = require('../middleware/auth')


router.route('/').post(auth.verifyToken, list.addList);

router.route('/:id').get(auth.verifyToken, list.getList)

module.exports = router;