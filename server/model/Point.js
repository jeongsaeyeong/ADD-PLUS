const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema(
    {
        uid: String,
        plus: [{
            title: String,
            reason: String,
            time: Date,
            amount: Number
        }],
        minus: [{
            title: String,
            reason: String,
            time: Date,
            amount: Number
        }],
        charge: Number
    },
    { collection: "point" }
);

const Point = mongoose.model("Point", pointSchema);

module.exports = { Point };