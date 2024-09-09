const express = require('express')
const router = express.Router();
const list = require('../controllers/list-cont')



router.route('/').get(list.getList).post(list.addList);

router.route('/comment/:id').patch(list.addComment)

router.route('/item/:id').patch(list.addListItem)

module.exports = router;