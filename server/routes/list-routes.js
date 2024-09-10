const express = require('express')
const router = express.Router();
const list = require('../controllers/list-cont')
const comment = require('../controllers/comment-cont')
const listItem = require('../controllers/list-item-cont')


router.route('/').post(list.addList);

router.route('/:id').get(list.getList)

module.exports = router;