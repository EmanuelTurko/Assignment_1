const Comments = require('../models/comment_model');

const createComment = async(req,res) => {
    const newComment = new Comments({
        content: req.body.content,
        sender: req.body.sender,
        postId: req.body.postId
    });
    try {
        const savedComment = await newComment.save();
        res.json(savedComment);
    } catch (err) {
        res.json({message: err});
    }
}

const readComment = async(req,res) => {
    try{
        let comments;
        if(req.query.sender) {
            console.log('sender');
             comments = await Comments.find({sender: req.query.sender});
            res.json(comments);
        } else {
            console.log('all');
             comments = await Comments.find();
            res.json(comments);
        }} catch (err) {
            res.json({message: err});
        }
    }

const updateComment = async(req,res) => {
    const id = req.params.id;
    console.log(id);
    try {
        const updatedComment = await Comments.findByIdAndUpdate(id, {content: 'new'}, {new: true});
        res.json(updatedComment);
    } catch {
        res.json({message: err});
    }
}

const deleteComment = async(req,res) => {

    try {
        let removedComment
        if(req.query.sender) {
            removedComment = await Comments.deleteMany({sender: req.query.sender});
        } else {
            removedComment = await Comments.deleteMany();
        }
        res.json(removedComment);
    } catch (err) {
        res.json({message: err});
    }
}

const getCommentBySender = async(req,res) => {
    const sender = req.params.sender;
    try {
        const comments = await Comments.find({sender: sender});
        res.json(comments);
    } catch (err) {
        res.json({message: err});
    }
}

module.exports = { createComment, readComment, updateComment, deleteComment, getCommentBySender };