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
        uid: String,
        point: Number
    },
    { collection: "users" }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };