const mongoose = require("mongoose");

const MoiscoreSchema = new mongoose.Schema(
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
    { collection: "moiscore" }
);

const Moiscore = mongoose.model("Moiscore", MoiscoreSchema);

module.exports = { Score };