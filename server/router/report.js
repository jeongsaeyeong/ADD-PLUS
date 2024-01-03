const express = require("express");
const router = express.Router();

const { Post } = require("../model/Post.js");
const { User } = require("../model/User.js");
const { Report } = require("../model/Report.js");

router.post("/post", async (req, res) => {
    let temp = {
        cate: req.body.cate,
        reason: req.body.reason,
    };

    Post.updateOne({ postNum: Number(req.body.postNum) }, { $inc: { reportNum: 1 } })
        .exec()
        .then(() => {
            User.findOne({ uid: req.body.uid })
                .exec()
                .then((userInfo) => {
                    temp.author = userInfo._id;

                    const newReport = new Report(temp);
                    newReport
                        .save()
                        .then(() => {
                            res.status(200).json({ success: true });
                        })
                })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false });
        })
})

router.post("/reple", async (req, res) => {
    let temp = {
        cate: req.body.cate,
        reason: req.body.reason,
    };

    Post.updateOne({ postNum: Number(req.body.postNum) }, { $inc: { reportNum: 1 } })
        .exec()
        .then(() => {
            User.findOne({ uid: req.body.uid })
                .exec()
                .then((userInfo) => {
                    temp.author = userInfo._id;

                    const newReport = new Report(temp);
                    newReport
                        .save()
                        .then(() => {
                            res.status(200).json({ success: true });
                        })
                })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false });
        })
})


module.exports = router;