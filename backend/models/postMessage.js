// models folder will contain all models for our application
// basically database schema i.e design or columns in rdbms

import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const postMessage = mongoose.model('postMessage', postSchema);

export default postMessage;
// we export mongoose model from postMessage.js and then we can run all commands like find, create, delete, etc.