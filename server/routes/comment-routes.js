const comment = require('../controllers/comment-cont')
const express = require('express')
const router = express.Router();

router.route('/:id').patch(auth.verifyToken,comment.addComment)

module.exports = router;