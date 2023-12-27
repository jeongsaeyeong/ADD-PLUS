const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        userNum: Number,
        displayName: String,
        userId: String,
        userEmail: String,
        userPass: String,
        userPhone: String,
        userCate: String,
        uid: String
    },
    { collection: "users" }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };