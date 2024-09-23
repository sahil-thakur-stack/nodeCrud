// routes.js
const express = require('express');
const {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost
} = require('./controllers/userController');

const router = express.Router();

// Define routes
router.post('/api/posts', createPost);
router.get('/api/getUsers', getAllPosts)
router.get('/api/posts/:id', getPostById);
router.put('/api/posts/:id', updatePost);
router.delete('/api/posts/:id', deletePost);

module.exports = router;
