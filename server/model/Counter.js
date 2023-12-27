const mongoose = require("mongoose");

const countSchema = new mongoose.Schema(
    {
        name: String,
        userNum: Number,
        repleNum: Number,
        likeNum: Number,
        veiwNum: Number,
        reportNum: Number,
    },
    { collection: "counter" }
);

const Counter = mongoose.model("Counter", countSchema);

module.exports = { Counter };