const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        displayName: String,
        userId: String,
        userNick: String,
        userPass: String,
        userPhone: String,
        uid: String
    },
    { collection: "users" }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };