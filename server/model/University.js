const mongoose = require("mongoose");

const universitySchema = new mongoose.Schema(
    {
        university: String,
        checkCont: String,
        department: String,
        type: String,
        year: Number,
        average: Number,
    },
    { collection: "university" }
);

const University = mongoose.model("University", universitySchema);

module.exports = { University };