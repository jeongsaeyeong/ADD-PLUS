const express = require("express");
const router = express.Router();

const { Advertisment } = require("../model/Advertisement.js");

// 제출
router.post("/submit", (req, res) => {
    const BordWrite = new Advertisment(req.body)
    BordWrite
        .save()
        .then(() => {
            res.status(200).json({ success: true });
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false })
        })
})


module.exports = router;