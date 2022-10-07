import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
   try {
        const postMessages = await PostMessage.find(); 
        res.status(200).json(postMessages);
   } catch (error) {
        res.status(404).json({message: error.message})
   }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const getPost = async (req, res) => {
    const {id: _id} = req.params

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')
     
    try {
         const postMessages = await PostMessage.findOne({_id});
         res.status(200).json(postMessages);
    } catch (error) {
         res.status(404).json({message: error.message})
    }
 }

export const updatePost = async(req, res) => {
     const {id: _id} = req.params
     const post = req.body

     if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

     const updatedPost = await PostMessage.updateOne({_id}, {$set: post})

     res.json(updatedPost)
}

export const deletePost = async(req, res) => {
     const {id: _id} = req.params

     if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

     const deletePost = await PostMessage.deleteOne({_id})

     res.json(deletePost)
}

export const upvotePost = async(req, res) => {
     const {id: _id} = req.params

     if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

     const upvotePost = await PostMessage.updateOne({_id}, {$inc: {upvote: 1}})

     res.json(upvotePost)
}

export const downvotePost = async(req, res) => {
     const {id: _id} = req.params

     if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

     const downvotePost = await PostMessage.updateOne({_id}, {$inc: {downvote: 1}})

     res.json(downvotePost)
}