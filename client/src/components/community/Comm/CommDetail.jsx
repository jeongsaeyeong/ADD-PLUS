import React, { useEffect, useState } from 'react'
import Fire from '../../../assets/img/icon_fire.svg'
import Eye from '../../../assets/img/icon_eye_empty.svg'
import comment from '../../../assets/img/icon_comment.svg'
import time from '../../../assets/img/icon_time.svg'
import RepleArea from '../Reple/RepleArea'

import moment from 'moment'
import "moment/locale/ko";
import axios from 'axios'
import { useSelector } from 'react-redux'

const CommDetail = (props) => {
    const [checkLike, setCheckLike] = useState(false)
    const [getLike, setGetLike] = useState(false)

    const user = useSelector((state) => state.user)

    const increaseViews = () => {
        let body = {
            postId: props.postInfo._id
        }
        axios.post('/api/post/increase', body)
            .catch((err) => {
                console.log(err)
            })
    }

    const onLike = () => {
        setCheckLike(!checkLike)

        let body = {
            delete: !checkLike,
            uid: user.uid,
            postId: props.postInfo._id
        }

        if (getLike === false && checkLike === false) {
            axios.post('/api/post/likeinsert', body)
                .catch((err) => {
                    console.log(err)
                })
        } else {
            axios.post('/api/post/likedelete', body)
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    useEffect(() => {
        LikeGet()
    })

    useEffect(() => {
        LikeGet()
        props.GetPost()
    }, [checkLike])

    const LikeGet = () => {
        let body = {
            uid: user.uid,
            postId: props.postInfo._id
        }

        axios.post('/api/post/getlike', body)
            .then((res) => {
                if (res.data.like) {
                    setCheckLike(true)
                    setGetLike(true)
                } else {
                    setCheckLike(false)
                    setGetLike(false)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }


    useEffect(() => {
        props.GetPost()
        increaseViews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const SetTime = (a) => {
        if (a) {
            return moment(a).format("YYYY MMM Do, hh:mm")
        }
    }

    return (
        <>
            <div className="comm__Wrap">
                {/* <CommSide /> */}
                <div className="comm__detail">
                    <div className="detail__header">
                        <h2>
                            <img src={Fire} alt="fire" />
                            {props.postInfo.cate}
                        </h2>
                    </div>
                    <div className="detail__box">
                        <div className="header">
                            <div className="box">
                                <h3>{props.postInfo.title}</h3>
                                <p className='author'>{props.postInfo.author.userCate}</p>
                            </div>
                            <div>
                                <div>
                                    <img src={time} alt="time" />
                                    <p>{SetTime(props.postInfo.createdAt)}</p>
                                </div>
                                <div>
                                    <img src={Eye} alt="Eye" />
                                    <p>{props.postInfo.veiwNum}</p>
                                </div>
                                <div>
                                    <img src={comment} alt="comment" />
                                    <p>{props.postInfo.repleNum}</p>
                                </div>
                                <div>
                                    <button onClick={() => { onLike(); }}>
                                        <svg
                                            width="22"
                                            height="20"
                                            viewBox="0 0 25 23"
                                            fill={getLike ? 'red' : 'none'}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M23.8354 8.17638C23.8354 9.91213 23.1793 11.5793 22.0076 12.8126C19.3105 15.6524 16.6945 18.6136 13.8967 21.3504C13.2554 21.9686 12.238 21.9461 11.6243 21.2999L3.56366 12.8126C1.12722 10.2472 1.12722 6.10558 3.56366 3.54018C6.02404 0.949565 10.0323 0.949565 12.4926 3.54018L12.7857 3.84867L13.0785 3.54036C14.2581 2.29761 15.8647 1.59668 17.543 1.59668C19.2214 1.59668 20.8278 2.29754 22.0076 3.54018C23.1794 4.77355 23.8354 6.44066 23.8354 8.17638Z"
                                                stroke="#CCCCCC"
                                                strokeWidth="2"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    <p>{props.postInfo.likeNum}</p>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <p>
                                {props.postInfo.content}
                            </p>
                            {props.postInfo.img ? <img src={props.postInfo.img} alt={props.postInfo.title} /> : null}
                        </div>
                    </div>
                    <RepleArea postInfo={props.postInfo} postId={props.postInfo._id} />
                </div>
            </div>
        </>
    )
}

export default CommDetail