const express = require('express');
const router = express.Router();

const postController = require('../controller/post_controller');

router.post('/', postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.put('/:id', postController.updatePost);
router.delete('/', postController.deleteAllPost);



module.exports = router;