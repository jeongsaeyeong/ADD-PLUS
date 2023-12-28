const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
    {
        postNum: String,
        reason: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        uid: String
    },
    { collection: "reports", timestamps: true }
);

const Report = mongoose.model("report", reportSchema);

module.exports = { Report };