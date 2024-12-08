const express = require('express')
const router = express.Router()

const commentsController = require('../controller/comment_controller')

router.post('/', commentsController.createComment);
router.get('/', commentsController.readComment);
router.put('/:id', commentsController.updateComment);
router.delete('/', commentsController.deleteComment);

module.exports = router;