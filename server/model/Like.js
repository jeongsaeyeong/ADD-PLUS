const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
    {
        uid: String,
        check: {
            type: Boolean,
            default: false,
        },
        postId: {
            type: mongoose.Schema.Types.ObjectId,
        }
    },
    { collection: "likes", timestamps: true }
);

const Like = mongoose.model("Like", likeSchema);

module.exports = { Like };