const listItem = require('../controllers/list-item-cont')
const express = require('express')
const router = express.Router();

router.route('/:id').patch(listItem.addListItem).get(listItem.getListItems)


module.exports = router;