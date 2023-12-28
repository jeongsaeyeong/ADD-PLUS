import React from 'react'
import CommSide from './CommSide'
import Fire from '../../../assets/img/icon_fire.svg'
import Eye from '../../../assets/img/icon_eye_empty.svg'
import comment from '../../../assets/img/icon_comment.svg'
import time from '../../../assets/img/icon_time.svg'
import heart from '../../../assets/img/icon_heart.svg'
import RepleArea from '../Reple/RepleArea'

import moment from 'moment'
import "moment/locale/ko";

const CommDetail = (props) => {

    const SetTime = (a, b) => {
        if (a !== b) {
            return moment(b).format("YYYY MMM Do, hh:mm") + "(수정됨)";
        } else {
            return moment(b).format("YYYY MMM Do, hh:mm")
        }
    }

    return (
        <>
            <div className="comm__Wrap">
                <CommSide />
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
                                    <p>{SetTime(props.postInfo.createdAt, props.postInfo.updatedAt)}</p>
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
                                    <img src={heart} alt="heart" />
                                    <p>{props.postInfo.likeNum}</p>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <p>
                                {props.postInfo.content}
                            </p>
                            <img src="/" alt="art" />
                        </div>
                    </div>
                    <RepleArea postInfo={props.postInfo} postId={props.postInfo._id} />
                </div>
            </div>
        </>
    )
}

export default CommDetail