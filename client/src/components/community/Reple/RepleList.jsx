import React, { useEffect, useState } from 'react'
import profile from '../../../assets/img/default_profile.svg'

import time from '../../../assets/img/icon_time.svg'
import siren from '../../../assets/img/icon_siren.svg'
import axios from 'axios';

import moment from 'moment'
import "moment/locale/ko";
import CommButton from '../Comm/CommButton';

const RepleList = (props) => {
    const [active, setActive] = useState(false);

    const showbutton = () => {
        setActive(!active)
    }

    const [repleList, setRepleList] = useState([])
    console.log(repleList)

    useEffect(() => {
        let body = {
            postId: props.postId
        }
        axios.post("/api/reple/getreple", body)
            .then((res) => {
                if (res.data.success) {
                    setRepleList([...res.data.repleList])
                }
            })

    }, [props.postId])

    const SetTime = (a, b) => {
        if (a !== b) {
            return moment(b).format("YYYY MMM Do, hh:mm") + "(수정됨)";
        } else {
            return moment(b).format("YYYY MMM Do, hh:mm")
        }
    }

    return (
        <>
            <div className="comment__Wrap">
                <CommButton postInfo={props.postInfo} params={props.params} />
                {repleList.map((reple, key) => {
                    return (
                        <div className={`comment__body ${key % 2 === 0 ? '' : 'white'}`} key={key}>
                            <div className="top">
                                <div className='profile__box'>
                                    <img src={profile} alt="profile" />
                                    <p>{reple.author.userCate}</p>
                                </div>
                                <div className="box" onClick={showbutton}>
                                    <div className="button">
                                        <div className={`last_box ${active ? '' : 'none'}`}>
                                            <button
                                                className={`report ${active ? '' : 'none'}`}
                                            >
                                                <img src={siren} alt="siren" />신고</button>
                                            <button className={`delete ${active ? '' : 'none'}`}>삭제하기</button>
                                            <button className={`modify ${active ? '' : 'none'}`}>수정하기</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <p className='text'>
                                    {reple.reple}
                                </p>
                                <div>
                                    <img src={time} alt="time" />
                                    <p>{SetTime(reple.createdAt, reple.updatedAt)}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default RepleList