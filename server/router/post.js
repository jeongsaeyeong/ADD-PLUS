const express = require("express");
const router = express.Router();

// 스키마 만들기
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
                            Counter.updateOne({ name: "counter" }, { $inc: { postNum: 1 } }).then(() => {
                                res.status(200).json({ success: true });
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
            res.status(200).json({ success: true })
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
router.post("/likeinsert", (req, res) => {

    Like.findOne({ uid: req.body.uid, postId: req.body.postId })
        .exec()
        .then((result) => {
            if (result) {
            } else {
                const LikeInsert = new Like(req.body);
                LikeInsert.save()
                    .then(() => {
                        Post.updateOne({ _id: req.body.postId }, { $inc: { likeNum: 1 } })
                            .exec()
                            .then(() => {
                                res.status(200).json({ success: true });
                            })

                    })
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false });
        });


})

router.post("/likedelete", (req, res) => {
    Like.deleteOne({ postId: req.body.postId, uid: req.body.uid })
        .then(() => {
            Post.updateOne({ _id: req.body.postId }, { $inc: { likeNum: -1 } })
                .exec()
                .then(() => {
                    res.status(200).json({ success: true });
                })
                .catch((err) => {
                    console.log(err)
                    res.status(400).json({ success: false });
                })
        })
})

router.post("/likefind", (req, res) => {
    Like.findOne({ postId: req.body.postId, uid: req.body.uid })
        .exec()
        .then((likeInfo) => {
            if (likeInfo) {
                console.log(likeInfo)
                return res.status(200).json({ success: true, likeInfo: likeInfo })
            } else {
                return res.status(200).json({ success: true })
            }
        })
        .catch((err) => {
            console.log(err)
            return res.status(400).json({ success: false })
        })
})


// 이미지 업로드
router.post("/image/upload", setUpload("addplus/post"), (req, res, next) => {
    // console.log(res.req);
    res.status(200).json({ success: true, filePath: res.req.file.location })
})


module.exports = router;