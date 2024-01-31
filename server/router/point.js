const express = require("express");
const router = express.Router();

const { Point } = require("../model/Point.js");

router.post("/get", (req, res) => {
    Point.find({ uid: req.body.uid })
        .exec()
        .then((pointInfo) => {
            console.log(pointInfo)
            return res.status(200).json({ success: true, pointlist: pointInfo })
        })
        .catch((err) => {
            console.log(err)
            return res.status(400).json({ success: false })
        })
})

module.exports = router;