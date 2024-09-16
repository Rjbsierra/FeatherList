const listItem = require('../controllers/list-item-cont')
const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')


router.route('/:id').patch(auth.verifyToken,listItem.addListItem).get(auth.verifyToken,listItem.getListItems)


module.exports = router;