const comment = require('../controllers/comment-cont')
const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')

router.route('/delete').patch(auth.verifyToken,comment.deleteComment)


router.route('/:id').patch(auth.verifyToken,comment.addComment)


module.exports = router;