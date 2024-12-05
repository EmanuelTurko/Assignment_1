

const createPost = (req, res) => {  // add a new post
    res.send('Post created');
}
const getAllPosts = (req, res) => { // get all posts
    res.send('Get all posts');
}
const getPostById = (req, res) => { // get post by id
    res.send('Post by id');
}
const getPostByOwner = (req,res) => { // get post by owner
    res.send('Post by owner');
}
const updatePost = (req, res) => { // update a post
    res.send('Post updated');
}

module.exports = { createPost, getAllPosts, getPostById, getPostByOwner, updatePost }; // export the functions to be used in the routes file