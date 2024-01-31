const express = require("express");
const router = express.Router();

// 스키마 만들기
const { Point } = require("../model/Point.js");
const { Post } = require("../model/Post.js");
const { Counter } = require("../model/Counter.js");
const { User } = require("../model/User.js");
const { Like } = require("../model/Like.js");

// 이미지 업로드
const setUpload = require("../util/upload.js");
const { trusted } = require("mongoose");

// 글 쓰기
router.post("/write", (req, res) => {
    let temp = {
        cate: req.body.cate,
        title: req.body.title,
        content: req.body.content,
        img: req.body.img,
    };

    Counter.findOne({ name: "counter" })
        .exec()
        .then((counter) => {
            temp.postNum = counter.postNum; // 번호 추가

            User.findOne({ uid: req.body.uid })
                .exec()
                .then((userInfo) => {
                    temp.author = userInfo._id; // 작가 추가

                    const BordWrite = new Post(temp);
                    BordWrite
                        .save()
                        .then(() => {
                            Counter.updateOne({ name: "counter" }, { $inc: { postNum: 1 } })
                                .then(() => {
                                    Point.updateOne(
                                        { uid: req.body.uid },
                                        {
                                            $push: {
                                                plus: {
                                                    title: "적립",
                                                    reason: "게시글 작성",
                                                    time: new Date(),  // 수정된 부분
                                                    amount: 100
                                                }
                                            }
                                        }
                                    )
                                        .then(() => {
                                            res.status(200).json({ success: true });
                                        })
                                        .catch((error) => {
                                            console.error(error);
                                            res.status(500).json({ success: false, error: "Internal Server Error" });
                                        });
                                })
                        })
                })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false })
        })
})

// 글 리스트
router.post("/list", (req, res) => {
    let sort = {};

    if (req.body.sort === "최신순") {
        sort = { createdAt: -1 };
    } else {
        sort = { repleNum: -1 };
    }

    Post
        .find({
            $and: [
                {
                    $or: [
                        { title: { $regex: req.body.searchTerm, $options: 'i' } },
                        { content: { $regex: req.body.searchTerm, $options: 'i' } },
                    ]
                },
                { cate: req.body.cate }
            ]
        })
        .sort(sort) // 정렬 조건 적용
        .populate("author")
        .exec()
        .then((result) => {
            res.status(200).json({ success: true, postList: result });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false });
        });
});

router.post("/hot", (req, res) => {
    let sort = {};

    if (req.body.sort === "최신순") {
        sort = { createdAt: -1 };
    } else {
        sort = { repleNum: -1 };
    }

    Post.find({
        $and: [
            {
                $or: [
                    { title: { $regex: req.body.searchTerm, $options: 'i' } },
                    { content: { $regex: req.body.searchTerm, $options: 'i' } },
                ]
            },
            { $expr: { $gte: ["$likeNum", 10] } }
        ]
    })
        .sort(sort) // 정렬 조건 적용
        .populate("author")
        .exec()
        .then((result) => {
            res.status(200).json({ success: true, postList: result });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false });
        });
})

// 글 상세페이지
router.post("/detail", (req, res) => {
    Post
        .findOne({ postNum: req.body.postNum })
        .populate("author")
        .exec()
        .then((result) => {
            res.status(200).json({ success: true, post: result });
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false });
        })
})

// 글 삭제 
router.post("/delete", (req, res) => {
    Post
        .deleteOne({ postNum: Number(req.body.postNum) })
        .exec()
        .then(() => {
            Point.updateOne(
                { uid: req.body.uid },
                {
                    $push: {
                        minus: {
                            title: "사용",
                            reason: "게시글 삭제",
                            time: new Date(),  // 수정된 부분
                            amount: -100
                        }
                    }
                }
            )
                .then(() => {
                    res.status(200).json({ success: true });
                })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false })
        })
})

// 글 수정 
router.post("/modify", (req, res) => {
    let temp = {
        cate: req.body.cate,
        title: req.body.title,
        content: req.body.content,
    }
    Post.updateOne({ postNum: Number(req.body.postNum) }, { $set: temp })
        .exec()
        .then(() => {
            res.status(200).json({ success: true });
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false });
        })
})

// 글 조회수 
router.post("/increase", (req, res) => {
    Post.updateOne({ _id: req.body.postId }, { $inc: { veiwNum: 1 } })
        .exec()
        .then(() => {
            res.status(200).json({ success: true });
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false });
        })
})

// 좋아요 관리
router.post("/likedelete", (req, res) => {
    Post.updateOne(
        { _id: req.body.postId },
        { $pull: { likeid: req.body.uid }, $inc: { likeNum: -1 } }
    )
        .then(() => {
            res.status(200).json({ success: true });
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ success: false });
        });
});

router.post("/likeinsert", (req, res) => {
    Post.findOne({ _id: req.body.postId, likeid: req.body.uid })
        .then(existingLike => {
            if (existingLike) {
                res.status(200).json({ success: true });
            } else {
                const newLike = new Like(req.body);
                newLike.save()
                    .then(() => {
                        return Post.updateOne(
                            { _id: req.body.postId },
                            { $addToSet: { likeid: req.body.uid }, $inc: { likeNum: 1 } }
                        );
                    })
                    .then(() => {
                        res.status(200).json({ success: true });
                    })
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        });
});

router.post("/getlike", (req, res) => {
    Post.find({ _id: req.body.postId, likeid: { $in: [req.body.uid] } })
        .exec()
        .then((result) => {
            if (result.length > 0) {
                res.status(200).json({ success: true, like: true, likearray: result[0].likeid });
            } else {
                res.status(200).json({ success: true, like: false });
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        });
})

// 이미지 업로드
router.post("/image/upload", setUpload("addplus/post"), (req, res, next) => {
    res.status(200).json({ success: true, filePath: res.req.file.location })
})

// mypage 리스트

// 글 리스트
router.post("/mylist", (req, res) => {
    User.find({ uid: req.body.uid })
        .then((result) => {
            if (result.length > 0) {
                Post.find({ author: result[0]._id })
                    .populate("author")
                    .exec()
                    .then((posts) => {
                        res.status(200).json({ success: true, postList: posts });
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(500).json({ success: false, error: "Internal Server Error" });
                    });
            } else {
                res.status(404).json({ success: false, error: "User not found" });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        });
});


// 글 리스트
router.post("/likelist", (req, res) => {
    Post
        .find({ likeid: { $in: req.body.uid } })  // $in 연산자 사용
        .populate("author")
        .exec()
        .then((result) => {
            res.status(200).json({ success: true, postList: result });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false });
        });
});

module.exports = router;