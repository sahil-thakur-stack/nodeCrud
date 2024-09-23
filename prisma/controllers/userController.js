// controllers/postController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a post
async function createPost(req, res)
{
    const { title, content } = req.body;
    try
    {
        const post = await prisma.post.create({
            data: { title, content },
        });
        res.json(post);
    } catch (error)
    {
        res.status(500).json({ error: 'Failed to create post' });
    }
}

// Get all posts
async function getAllPosts(req, res)
{
    try
    {
        const posts = await prisma.post.findMany();
        res.send({ message: true, posts })

        // res.json(posts);
    } catch (error)
    {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
}

// Get a single post by ID
async function getPostById(req, res)
{
    const { id } = req.params;
    try
    {
        const post = await prisma.post.findUnique({
            where: { id: parseInt(id) },
        });
        res.json(post);
    } catch (error)
    {
        res.status(500).json({ error: 'Failed to fetch post' });
    }
}

// Update a post by ID
async function updatePost(req, res)
{
    const { id } = req.params;
    const { title, content } = req.body;
    try
    {
        const post = await prisma.post.update({
            where: { id: parseInt(id) },
            data: { title, content },
        });
        res.send({ message: true, post })
        // res.json(post);
    } catch (error)
    {
        res.status(500).json({ error: 'Failed to update post' });
    }
}

// Delete a post by ID
async function deletePost(req, res)
{
    const { id } = req.params;
    try
    {
        await prisma.post.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: 'Post deleted' });
    } catch (error)
    {
        res.status(500).json({ error: 'Failed to delete post' });
    }
}

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
};
