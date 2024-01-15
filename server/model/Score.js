const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema(
    {
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        uid: String,
        grade: String,
        big: String,
        middle: String,
        small: String,
        count: Number,
        score: Number,
    },
    { collection: "score" }
);

const Score = mongoose.model("Score", scoreSchema);

module.exports = { Score };