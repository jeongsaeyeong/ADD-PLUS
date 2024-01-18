const express = require("express");
const router = express.Router();

const { University } = require("../model/University.js");

router.post("/get", (req, res) => {
    University.find({
        university: req.body.university,
        checkCont: req.body.checkCont,
        department: req.body.department,
        type: req.body.type
    })
        .exec()
        .then((university) => {
            return res.status(200).json({ success: true, university: university })
        })
        .catch((err) => {
            console.log(err)
            return res.status(400).json({ success: false })
        })
})

module.exports = router;