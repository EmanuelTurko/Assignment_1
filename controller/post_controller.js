const Post = require('../models/post_model'); // import the model to be used in the controller file

const createPost = (async (req,res)=>{
    const newPost = new Post({
        title: req.body.title,
        content: req.body.content,
        sender: req.body.sender
    });
    try { 
        const savedPost = await newPost.save();
        res.json(savedPost);
    } catch (err) {
        res.json({message: err});
    } 
});
   
const getAllPosts = async(req,res)=>{ // get all posts / get posts by sender
    try {
        let posts;
        if(req.query.sender){
            posts = await Post.find({sender: req.query.sender});
        } else {
        posts = await Post.find();
        }
        res.json(posts);
    } catch (err) {
        res.json({message: err});
    }
};
const getPostById =async (req, res) => { // get post by id
    const id = req.params.id;
    try {
        const post = await Post.findById(id);
        res.json(post);
    } catch (err) {
        res.json({message: err});
    }
}
const updatePost = async(req, res) => { // update a post
    const id = req.params.id;
    try {
        const updatedPost = await Post.findByIdAndUpdate(id, {content: 'new'});
     res.json(updatedPost);
    }catch (err) {
        res.json({message: err});
    };
}
const deleteAllPost = async(req, res) => { // delete all posts
    try {
        const removedPosts = await Post.deleteMany();
        res.json(removedPosts);
    } catch (err) {
        res.json({message: err});
    }
}


module.exports = { createPost, getAllPosts, getPostById, updatePost, deleteAllPost }; 