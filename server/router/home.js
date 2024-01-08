const express = require("express");
const router = express.Router();

const { Post } = require("../model/Post.js");

router.post("/post", async (req, res) => {
    try {
        const totalDocuments = await Post.countDocuments();
        const randomIndexes = generateRandomIndexes(totalDocuments, 2);
        const result = await Post.find().skip(randomIndexes[0]).limit(2).populate("author");

        console.log(result);
        res.status(200).json({ success: true, postList: result });
    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
    }
});

function generateRandomIndexes(max, count) {
    const indexes = [];
    while (indexes.length < count) {
        const randomIndex = Math.floor(Math.random() * max);
        if (!indexes.includes(randomIndex)) {
            indexes.push(randomIndex);
        }
    }
    return indexes;
}

router.post("/today", (req, res) => {
    const selectedDate = new Date(req.body.createdAt);
    const startDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
    const endDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + 1);

    Post.find({
        createdAt: {
            $gte: startDate,
            $lt: endDate
        }
    })
        .populate("author")
        .exec()
        .then((result) => {
            res.status(200).json({ success: true, todayList: result });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false });
        });
});

router.post("/top", (req, res) => {
    Post.find({})
        .populate("author")
        .sort({ viewNum: -1 })
        .limit(4)
        .exec()
        .then((result) => {
            console.log(result);
            res.status(200).json({ success: true, topList: result });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false });
        });
});


module.exports = router;