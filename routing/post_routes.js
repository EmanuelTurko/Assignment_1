const express = require('express');
const router = express.Router();

const postController = require('../controller/post_controller');

router.post('/', postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/post/:id', postController.getPostById);
router.get('/post', postController.getPostByOwner);
router.put('/post/:id', postController.updatePost);



module.exports = router;