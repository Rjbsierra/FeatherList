const comment = require('../controllers/comment-cont')
const express = require('express')
const router = express.Router();

router.route('/').post(comment.addComment);

module.exports = router;