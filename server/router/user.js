const express = require("express");
const router = express.Router();

const { User } = require("../model/User.js");
const { Point } = require("../model/Point.js");
const { Counter } = require("../model/Counter.js");

router.post("/join", (req, res) => {
    console.log(req.body)

    let temp = req.body;

    Counter.findOne({ name: "counter" })
        .then((result) => {
            temp.userNum = result.userNum;

            const userData = new User(temp);
            userData.save().then(() => {
                Counter.updateOne({ name: "counter" }, { $inc: { userNum: 1 } })
                    .then(() => {
                        let point = {
                            uid: req.body.uid,
                            minus: [{
                                title: "적립",
                                reason: "Made",  // 초기값에 대한 이유를 설정하세요.
                                time: new Date(),
                                amount: 0
                            }],
                            plus: [{
                                title: "사용",
                                reason: "Made",  // 초기값에 대한 이유를 설정하세요.
                                time: new Date(),
                                amount: 0
                            }],
                            charge: 0,
                        }
                        const userPoint = new Point(point)
                        userPoint.save().then(() => {
                            res.status(200).json({ success: true })
                        })
                    })

            })
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false });
        })
});

router.post("/emailcheck", (req, res) => {
    User.findOne({ userEmail: req.body.userEmail })
        .exec()
        .then((result) => {
            let check = true;
            if (result) {
                check = false;
            }
            res.status(200).json({ success: true, check })
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false });
        })
})

router.post("/idcheck", (req, res) => {
    User.findOne({ userId: req.body.userId })
        .exec()
        .then((result) => {
            let check = true;
            if (result) {
                check = false;
            }
            res.status(200).json({ success: true, check })
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false });
        })
})

router.post("/login", (req, res) => {
    console.log(req.body)
    User.findOne({ userId: req.body.userId, userPass: req.body.userPass })
        .exec()
        .then((result) => {
            if (result) {
                res.status(200).json({ success: true, result: result })
            } else {
                res.status(400).json({ success: false });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false });
        })
})

router.post("/findpass", (req, res) => {
    User.findOne({ userId: req.body.userId, userEmail: req.body.userEmail })
        .exec()
        .then((result) => {
            if (result) {
                res.status(200).json({ success: true })
            } else {
                res.status(400).json({ success: false });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false });
        })
})

router.post("/findpassuser", (req, res) => {
    User.findOne({ userId: req.body.userId })
        .exec()
        .then((result) => {
            if (result) {
                res.status(200).json({ success: true, info: result })
            } else {
                res.status(400).json({ success: false });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false });
        })
})

router.post("/findid", (req, res) => {
    User.findOne({ displayName: req.body.displayname, userEmail: req.body.userEmail })
        .exec()
        .then((result) => {
            if (result) {
                res.status(200).json({ success: true })
            } else {
                res.status(400).json({ success: false });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false });
        })
})

router.post("/findiduser", (req, res) => {
    User.findOne({ userEmail: req.body.userEmail })
        .exec()
        .then((result) => {
            if (result) {
                res.status(200).json({ success: true, info: result })
            } else {
                res.status(400).json({ success: false });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false });
        })
})

router.post("/checkpass", (req, res) => {
    User.findOne({ userPass: req.body.userPass, uid: req.body.uid })
        .exec()
        .then((result) => {
            if (result) {
                res.status(200).json({ success: true });
            } else {
                res.status(400).json({ success: false });
            }
        })
});

router.post("/userinfo", (req, res) => {
    User.findOne({ uid: req.body.uid })
        .exec()
        .then((userInfo) => {
            if (userInfo) {
                res.status(200).json({ success: true, userInfo: userInfo });
            } else {
                res.status(400).json({ success: false });
            }
        })
});

router.post("/change", (req, res) => {
    User.findOneAndUpdate(
        { uid: req.body.uid },
        {
            displayName: req.body.displayName,
            userPass: req.body.userPass,
            userPhone: req.body.userPhone,
        })
        .exec()
        .then(() => {
            res.status(200).json({ success: true });
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false });
        })
});

router.post("/delete", (req, res) => {
    User.findOneAndDelete({ uid: req.body.uid })
        .exec()
        .then(() => {
            res.status(200).json({ success: true });
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false });
        })
});

module.exports = router;