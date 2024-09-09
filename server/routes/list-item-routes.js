const listItem = require('../controllers/list-item-cont')
const express = require('express')
const router = express.Router();

router.route('/').post(listItem.addItem)

module.exports = router;