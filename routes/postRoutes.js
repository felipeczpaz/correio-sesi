// routes/postRoutes.js
const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router.post('/create', postController.createPost);
router.get('/user/:user_id', postController.getPostsByUserId);
router.delete('/delete/:post_id', postController.deletePost);

module.exports = router;
