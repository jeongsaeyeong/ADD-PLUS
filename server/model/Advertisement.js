const mongoose = require("mongoose");

const AdvertismentSchema = new mongoose.Schema(
    {
        coparation: String,
        img: String,
        link: String,
        charge: String,
        phone: String,
        email: String,
        uid: String,
    },
    { collection: "advertisement", timestamps: true }
);

const Advertisment = mongoose.model("Advertisment", AdvertismentSchema);

module.exports = { Advertisment };