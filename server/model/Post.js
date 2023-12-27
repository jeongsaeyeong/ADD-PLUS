const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        postNum: Number,
        emoji: String,
        cate: String,
        title: String,
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
        uid: String
    },
    { collection: "users" }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };