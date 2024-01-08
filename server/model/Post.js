const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        postNum: Number,
        emoji: String,
        cate: String,
        title: String,
        content: String,
        img: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        repleNum: {
            type: Number,
            default: 0,
        },
        likeNum: {
            type: Number,
            default: 0,
        },
        veiwNum: {
            type: Number,
            default: 0,
        },
        reportNum: {
            type: Number,
            default: 0,
        },
        uid: String,
        likeid: {
            type: Array,
            default: ''
        }
    },
    { collection: "posts", timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };