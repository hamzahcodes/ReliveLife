// controllers is nothing but handler functions for various routes
// we import the model we create in models folder
import mongoose from "mongoose";
import postMessage from "../models/postMessage.js";
import { cloudinary } from "../utils/cloudinary.js";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await postMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    // res.send('This works')
};

export const uploadImage = async (req, res) => {
    
}
export const createPost = async (req, res) => {
    const post = req.body;
    const imageUrl = await cloudinary.uploader.upload(post.selectedFile, function (err, result){
        if(err) {
          console.log(err);
          return;
        }
        result.secure_url
    })

    const newPost = new postMessage({
        'creator': post.creator,
        'title': post.title,
        'message': post.message,
        'tags': post.tags,
        'selectedFile': imageUrl.secure_url
    });
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        console.log("Inside createPost catch");
        res.status(409).json({message: error.message})
    }
};

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with this id');

    const updatedPost = await postMessage.findByIdAndUpdate(_id, {...post, _id},  {new: true});
    res.json(updatedPost)
}

export const deletePost = async (req, res) => {
    const { id: _id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with such id');

    await postMessage.findByIdAndDelete(_id);

    res.json({message: 'Post deleted Successfully'})
}

export const likePost = async (req, res) => {
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with such id');

    const post = await postMessage.findById(_id);
    const updatedPost = await postMessage.findByIdAndUpdate(_id, {likeCount : post.likeCount + 1}, {new : true});
    res.json(updatedPost);
}