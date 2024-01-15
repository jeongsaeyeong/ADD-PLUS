const express = require("express");
const router = express.Router();

const { User } = require("../model/User.js");
const { Score } = require('../model/Score.js')

router.post("/submit", (req, res) => {
    let temp = {
        uid: req.body.uid,
        grade: req.body.grade,
        big: req.body.big,
        middle: req.body.middle,
        small: req.body.small,
        count: req.body.count,
        score: req.body.score
    }

    User.findOne({ uid: req.body.uid })
        .exec()
        .then((userInfo) => {
            temp.author = userInfo._id;

            const newScore = new Score(temp);
            newScore
                .save()
                .then(() => {
                    res.status(200).json({ success: true });
                })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false });
        })
})

// 가져오기
router.post("/get", (req, res) => {
    Score.find({ uid: req.body.uid })
        .populate("author")
        .exec()
        .then((list) => {
            return res.status(200).json({ success: true, list: list })
        })
        .catch((err) => {
            console.log(err)
            return res.status(400).json({ success: false })
        })
})

module.exports = router;